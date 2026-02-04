
const BASE_URL = "https://chatwoot.aquariseia.ch";
const INBOX_IDENTIFIER = "qbjB2LeNe1SMnqFQjTt9NWY3";

export interface Message {
    id: number;
    content: string;
    message_type: 0 | 1; // 0=incoming(usuário), 1=outgoing(agente)
    created_at: number;
    sender?: {
        name: string;
        avatar: string;
    };
    attachments?: Array<{
        data_url: string;
        file_type: string;
        thumb_url?: string;
    }>;
}

export const chatwootService = {
    // 1. Criar ou Obter Contato
    // Usa o uuid para identificar o usuário de forma persistente
    async createContact(sourceId: string, name: string, email: string, phone: string) {
        try {
            const response = await fetch(`${BASE_URL}/public/api/v1/inboxes/${INBOX_IDENTIFIER}/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    source_id: sourceId,
                    name,
                    email,
                    phone_number: phone,
                    custom_attributes: {
                        telefoneSITE: phone,
                        telefone: phone
                    }
                }),
            });
            return await response.json();
        } catch (error) {
            console.error("Erro ao criar contato:", error);
            throw error;
        }
    },

    // 2. Criar Conversa
    // Requer o source_id (identificador do contato)
    async createConversation(sourceId: string, contactId: string) {
        try {
            // Nota: Na API pública, a criação de conversa geralmente acontece automaticamente ou via endpoint específico
            // dependendo da versão. Vamos tentar o fluxo padrão:
            // Se o contato existe, podemos precisar listar conversas primeiro ou apenas criar uma.
            // Para simplificar nesta versão da API pública, agimos como o contato.

            const response = await fetch(`${BASE_URL}/public/api/v1/inboxes/${INBOX_IDENTIFIER}/contacts/${sourceId}/conversations`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            return await response.json();
        } catch (error) {
            console.error("Erro ao criar conversa:", error);
            throw error;
        }
    },

    // 3. Enviar Mensagem
    async sendMessage(sourceId: string, conversationId: string, content: string) {
        try {
            const response = await fetch(`${BASE_URL}/public/api/v1/inboxes/${INBOX_IDENTIFIER}/contacts/${sourceId}/conversations/${conversationId}/messages`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content }),
            });
            return await response.json();
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            throw error;
        }
    },

    // 4. Listar Mensagens
    async getMessages(sourceId: string, conversationId: string) {
        try {
            const response = await fetch(`${BASE_URL}/public/api/v1/inboxes/${INBOX_IDENTIFIER}/contacts/${sourceId}/conversations/${conversationId}/messages`, {
                method: "GET",
            });
            return await response.json();
        } catch (error) {
            console.error("Erro ao obter mensagens:", error);
            return [];
        }
    },

    // 5. Enviar para Webhook do n8n
    // Envia os dados no formato esperado pelo workflow "01. Secretária"
    async sendToWebhook(messageId: number, conversationId: number, contactId: number, senderPhone: string, senderName: string, content: string, senderEmail?: string) {
        try {
            const webhookURL = "/api/webhook"; // Proxy local que redireciona para n8n



            const payload = {
                body: {
                    id: messageId,
                    account: {
                        id: 1,
                        name: "Aquarise"
                    },
                    conversation: {
                        id: conversationId,
                        contact_inbox: {
                            contact_id: contactId
                        }
                    },
                    sender: {
                        id: contactId,
                        name: senderName,
                        email: senderEmail || null,
                        phone_number: senderPhone,  // Telefone também aqui, como no Chatwoot real
                        identifier: null,
                        thumbnail: "",
                        avatar: "",
                        custom_attributes: {},
                        additional_attributes: {},
                        blocked: false
                    },
                    content: content,
                    inbox: {
                        id: 4,  // ID correto do inbox "Chat AquariseShop"
                        name: "Chat AquariseShop"
                    },
                    message_type: "incoming",
                    created_at: new Date().toISOString(),
                    private: false,
                    source_id: null,
                    event: "message_created"
                }
            };

            const response = await fetch(webhookURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            console.log("✅ Dados enviados para webhook:", payload);
            return await response.json();
        } catch (error) {
            console.error("❌ Erro ao enviar para webhook:", error);
            // Não lançar erro para não quebrar o fluxo principal
        }
    }
};
