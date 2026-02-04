import { useEffect, useState, useRef } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { chatwootService, Message } from "../services/chatwoot";
import { useNavigate } from "react-router-dom";

// --- Funções Auxiliares para Cookies e UUID ---
const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

const setCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const COOKIE_USER_ID = "chat_user_uuid";
const COOKIE_CONV_ID = "chat_conv_id";
const COOKIE_USER_NAME = "chat_user_name";
const COOKIE_USER_PHONE = "chat_user_phone";

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<"form" | "chat">("form"); // 'form' ou 'chat'

    // Estado do Formulário
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);

    // Estado do Chat
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const [sourceId, setSourceId] = useState("");
    const [conversationId, setConversationId] = useState("");

    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 1. Inicializar ID do Usuário
        let uuid = getCookie(COOKIE_USER_ID);
        if (!uuid) {
            uuid = generateUUID();
            setCookie(COOKIE_USER_ID, uuid, 365);
        }
        setSourceId(uuid);

        // 2. Verificar se já temos uma conversa/sessão ativa
        const savedConvId = getCookie(COOKIE_CONV_ID);
        const savedName = getCookie(COOKIE_USER_NAME);
        const savedPhone = getCookie(COOKIE_USER_PHONE);

        if (savedConvId && savedName) {
            setConversationId(savedConvId);
            setFormData(prev => ({ ...prev, name: savedName, phone: savedPhone || "" }));
            setView("chat");
        }
    }, []);

    // Buscar mensagens quando o chat estiver aberto
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isOpen && view === "chat" && sourceId && conversationId) {
            const fetchMsgs = async () => {
                try {
                    const data = await chatwootService.getMessages(sourceId, conversationId);
                    if (Array.isArray(data)) {
                        setMessages(data);
                    }
                } catch (error) {
                    console.error("Erro ao buscar mensagens", error);
                }
            };

            fetchMsgs(); // Busca inicial
            interval = setInterval(fetchMsgs, 5000); // Buscar a cada 5s
        }
        return () => clearInterval(interval);
    }, [isOpen, view, sourceId, conversationId]);

    // Rolar para o final quando houver novas mensagens
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Função para navegar ao clicar em link de produto
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.preventDefault();

        // Se for link do Instagram, abrir em nova aba
        if (url.includes('instagram.com') || url.includes('instagr.am')) {
            window.open(url, '_blank');
            return;
        }

        // Extrair o caminho do produto da URL
        try {
            const urlObj = new URL(url);
            const path = urlObj.pathname + urlObj.search;


            // Navegar para a página do produto
            navigate(path);
        } catch (error) {
            // Se não conseguir parsear a URL, abrir em nova aba
            window.open(url, '_blank');
        }
    };

    // Função para formatar texto com negrito e links clicáveis
    const formatMessage = (text: string) => {
        // Regex para detectar URLs
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // Primeiro, dividir por URLs
        const urlParts = text.split(urlRegex);

        return urlParts.map((urlPart, urlIndex) => {
            // Se for uma URL, criar link clicável
            if (urlRegex.test(urlPart)) {
                return (
                    <a
                        key={`url-${urlIndex}`}
                        href={urlPart}
                        onClick={(e) => handleLinkClick(e, urlPart)}
                        className="underline hover:opacity-80 transition-opacity cursor-pointer"
                        style={{ color: 'inherit' }}
                    >
                        {urlPart}
                    </a>
                );
            }

            // Se não for URL, processar @aquariseshop e negrito
            const instagramRegex = /(@aquariseshop)/gi;
            const instagramParts = urlPart.split(instagramRegex);

            return instagramParts.map((instaPart, instaIndex) => {
                // Se for @aquariseshop, criar link para Instagram
                if (instagramRegex.test(instaPart)) {
                    return (
                        <a
                            key={`${urlIndex}-insta-${instaIndex}`}
                            href="https://www.instagram.com/aquariseshop/"
                            onClick={(e) => handleLinkClick(e, 'https://www.instagram.com/aquariseshop/')}
                            className="underline hover:opacity-80 transition-opacity cursor-pointer font-semibold"
                            style={{ color: 'inherit' }}
                        >
                            {instaPart}
                        </a>
                    );
                }

                // Processar negrito
                const boldParts = instaPart.split(/(\*[^*]+\*)/g);
                return boldParts.map((part, index) => {
                    if (part.startsWith('*') && part.endsWith('*')) {
                        // Remove os asteriscos e aplica negrito
                        const boldText = part.slice(1, -1);
                        return <strong key={`${urlIndex}-${instaIndex}-bold-${index}`}>{boldText}</strong>;
                    }
                    return <span key={`${urlIndex}-${instaIndex}-text-${index}`}>{part}</span>;
                });
            });
        });
    };

    const handleStartChat = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone) return;

        // Validar se o telefone começa com +
        if (!formData.phone.startsWith('+')) {
            alert('⚠️ Por favor, inclua o código do país com + na frente do telefone.\n\nExemplo: +41 76 683 05 15');
            return;
        }

        // Validar se tem pelo menos o código do país (+ seguido de números)
        const phoneRegex = /^\+\d+/;
        if (!phoneRegex.test(formData.phone)) {
            alert('⚠️ Formato de telefone inválido.\n\nPor favor, use o formato: +[código do país] [número]\n\nExemplo: +41 76 683 05 15');
            return;
        }

        setLoading(true);

        try {
            // 1. Criar/Atualizar Contato
            const contact = await chatwootService.createContact(sourceId, formData.name, formData.email, formData.phone);

            // 2. Criar Conversa
            // Nota: A lógica de criação de conversa pode variar dependendo da versão da API.
            // Geralmente, criar um contato retorna o objeto do contato.
            // Assumimos que a criação de conversa funciona apenas com o Source ID nesta versão da API.
            const conversation = await chatwootService.createConversation(sourceId, contact.id);

            const convId = conversation.id;

            setConversationId(convId);
            setCookie(COOKIE_CONV_ID, convId.toString(), 365);
            setCookie(COOKIE_USER_NAME, formData.name, 365);
            setCookie(COOKIE_USER_PHONE, formData.phone, 365);

            setView("chat");
        } catch (error) {
            console.error("Falha ao iniciar chat:", error);
            // Fallback: Se a criação da conversa falhar, talvez já exista uma conversa ativa.
            // Por enquanto, assumimos sucesso ou solicitamos nova tentativa.
            alert("Não foi possível iniciar o chat. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const tempContent = newMessage;
        setNewMessage(""); // Limpar input imediatamente para melhor UX

        try {
            // Atualização otimista (opcional) - ou apenas aguardar o polling
            const messageResponse = await chatwootService.sendMessage(sourceId, conversationId, tempContent);

            // Buscar imediatamente para atualizar a UI
            const data = await chatwootService.getMessages(sourceId, conversationId);
            if (Array.isArray(data)) setMessages(data);

            // Enviar para o webhook do n8n no formato correto
            // Precisamos do ID da mensagem que acabou de ser criada
            if (messageResponse && messageResponse.id) {
                await chatwootService.sendToWebhook(
                    messageResponse.id,           // ID da mensagem
                    parseInt(conversationId),     // ID da conversa
                    parseInt(sourceId),           // ID do contato (usando sourceId)
                    formData.phone,               // Telefone do remetente
                    formData.name,                // Nome do remetente
                    tempContent,                  // Conteúdo da mensagem
                    formData.email                // Email do remetente
                );
            }

        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            setNewMessage(tempContent); // Reverter em caso de falha
        }
    };

    const handleResetChat = () => {
        // Limpar todos os cookies do chat
        document.cookie = COOKIE_USER_ID + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = COOKIE_CONV_ID + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = COOKIE_USER_NAME + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = COOKIE_USER_PHONE + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Resetar estados
        setFormData({ name: "", email: "", phone: "" });
        setMessages([]);
        setConversationId("");
        setView("form");

        // Gerar novo UUID
        const newUuid = generateUUID();
        setCookie(COOKIE_USER_ID, newUuid, 365);
        setSourceId(newUuid);
    };

    return (
        <>
            {!isOpen && (
                <div className="fixed bottom-6 right-6 z-50">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="gradient-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse"
                    >
                        <MessageCircle className="w-8 h-8" />
                    </button>
                </div>
            )}

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in flex flex-col border border-border" style={{ height: '500px', maxHeight: '80vh' }}>
                    {/* Cabeçalho */}
                    <div className="gradient-primary p-4 flex justify-between items-center text-white shrink-0">
                        <div>
                            <h3 className="font-heading font-semibold text-lg">Aquarise Shop</h3>
                            <p className="text-xs opacity-90">Atendimento Online</p>
                        </div>
                        <div className="flex gap-2">
                            {view === "chat" && (
                                <button
                                    onClick={handleResetChat}
                                    className="hover:bg-white/20 rounded-full p-1 transition-colors"
                                    title="Reiniciar chat"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                        <path d="M21 3v5h-5" />
                                        <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                        <path d="M3 21v-5h5" />
                                    </svg>
                                </button>
                            )}
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Corpo */}
                    <div className="flex-1 overflow-hidden bg-gray-50 relative">

                        {/* VISUALIZAÇÃO: FORMULÁRIO */}
                        {view === "form" && (
                            <div className="p-6 h-full flex flex-col justify-center">
                                <p className="text-sm text-gray-600 mb-6 text-center">
                                    Olá! Preencha seus dados abaixo para falar com nossa Inteligência Artificial ou com um atendente.
                                </p>
                                <form onSubmit={handleStartChat} className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={formData.name}
                                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Seu email"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Seu telefone (ex: +41 76 683 05 15)"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        value={formData.phone}
                                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full gradient-primary text-white font-medium py-3 rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                    >
                                        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Iniciar Conversa</span>}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* VISUALIZAÇÃO: CHAT */}
                        {view === "chat" && (
                            <div className="flex flex-col h-full">
                                {/* Lista de Mensagens */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                                    {messages.length === 0 && (
                                        <div className="text-center text-gray-400 text-sm mt-10">
                                            Nenhuma mensagem ainda.
                                        </div>
                                    )}
                                    {messages.map((msg) => {
                                        // message_type: 0 = mensagem do usuário (visitante), 1 = mensagem do agente/bot
                                        // Padrão da API Chatwoot: 0 = incoming (Visitante), 1 = outgoing (Agente)
                                        const isUser = msg.message_type === 0;
                                        return (
                                            <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`
                          max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm
                          ${isUser
                                                        ? 'bg-primary text-white rounded-tr-none'
                                                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'}
                        `}>
                                                    {msg.content && formatMessage(msg.content)}

                                                    {/* Renderizar imagens se houver attachments */}
                                                    {msg.attachments && msg.attachments.length > 0 && (
                                                        <div className="mt-2 space-y-2">
                                                            {msg.attachments.map((attachment, idx) => {
                                                                // Verificar se é imagem
                                                                if (attachment.file_type && attachment.file_type.startsWith('image/')) {
                                                                    return (
                                                                        <img
                                                                            key={idx}
                                                                            src={attachment.data_url}
                                                                            alt="Imagem enviada"
                                                                            className="max-w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                                                            style={{ maxHeight: '300px' }}
                                                                            onClick={() => window.open(attachment.data_url, '_blank')}
                                                                        />
                                                                    );
                                                                }
                                                                return null;
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Área de Input */}
                                <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                                    <form onSubmit={handleSendMessage} className="flex gap-2">
                                        <input
                                            type="text"
                                            className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
                                            placeholder="Digite sua mensagem..."
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                        />
                                        <button
                                            type="submit"
                                            disabled={!newMessage.trim()}
                                            className="p-2 gradient-primary text-white rounded-full hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        >
                                            <Send className="w-5 h-5 pl-0.5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </>
    );
};

export default ChatWidget;
