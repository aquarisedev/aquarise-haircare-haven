import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Product } from "@/data/products";
import { useTranslation } from "react-i18next";
import { Star, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface ProductDetailsProps {
    product: Product | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ProductDetails = ({ product, open, onOpenChange }: ProductDetailsProps) => {
    const { t } = useTranslation();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Reset selected image when product changes or dialog opens
    useEffect(() => {
        if (product) {
            setSelectedImage(product.image);
        }
    }, [product, open]);

    if (!product) return null;

    const handleWhatsAppClick = () => {
        const phoneNumber = "+41779000121"; // Número limpo sem espaços
        const productUrl = `${window.location.origin}/?product=${product.id}`;
        const message = `${t("whatsapp.message")}${product.name} (${productUrl})`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <div className="flex items-start justify-between">
                        <div className="space-y-2">
                            {/* Linha de Tags (Marca + Grupos) */}
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center rounded-full border border-primary/50 px-2.5 py-0.5 text-xs font-semibold text-primary uppercase tracking-wide">
                                    {product.brand}
                                </span>
                                {product.groups?.map((group) => {
                                    const getGroupTranslation = (groupName: string) => {
                                        const map: Record<string, string> = {
                                            "NUTRIÇÃO": "groups.nutricao",
                                            "HIDRATAÇÃO": "groups.hidratacao",
                                            "RECONSTRUÇÃO": "groups.reconstrucao",
                                            "CACHOS PERFEITOS": "groups.cachos_perfeitos",
                                            "CRESCIMENTO/FORTALECIMENTO": "groups.crescimento_fortalecimento",
                                            "ALISAMENTO/CONTROLE DE FRIZZ": "groups.alisamento_controle_frizz",
                                            "LOIROS ILUMINADOS": "groups.loiros_iluminados",
                                            "FINALIZADORES": "groups.finalizadores",
                                            "OLEOS": "groups.oleos",
                                            "ONDULADOS": "groups.ondulados",
                                            "TRANSIÇÃO CAPILAR": "groups.transicao_capilar",
                                            "CRONOGRAMA CAPILAR": "groups.cronograma_capilar",
                                            "CORPO E BANHO": "groups.corpo_banho",
                                            "SKINCARE": "groups.skincare",
                                            "PERFUMARIA": "groups.perfumaria"
                                        };
                                        return map[groupName] ? t(map[groupName]) : groupName;
                                    };

                                    return (
                                        <span
                                            key={group}
                                            className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary"
                                        >
                                            {getGroupTranslation(group)}
                                        </span>
                                    );
                                })}
                            </div>

                            <DialogTitle className={`text-2xl font-bold ${product.brand === 'GOLDSPELL' ? "font-['Playfair_Display'] tracking-wide" : "font-heading"}`}>{product.name}</DialogTitle>
                            <DialogDescription className="text-lg text-muted-foreground font-medium">
                                {product.collection}
                            </DialogDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-12 top-4"
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                toast.success(t("product.linkCopied", "Link copiado!"));
                            }}
                            title={t("product.share", "Compartilhar")}
                        >
                            <Share2 className="h-5 w-5" />
                        </Button>
                    </div>
                </DialogHeader>

                <div className="grid gap-6 py-4 md:grid-cols-2">
                    <div className="flex flex-col gap-4">
                        <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                            {selectedImage && selectedImage !== "/placeholder.svg" ? (
                                <img
                                    src={selectedImage}
                                    alt={product.name}
                                    className={`h-full w-full object-contain ${product.imageClassName || "p-4"}`}
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center bg-gray-100">
                                    <span className="text-6xl text-gray-300 font-bold">{product.brand[0]}</span>
                                </div>
                            )}
                        </div>

                        {/* Image Gallery Thumbnails */}
                        {product.images && product.images.length > 1 && (
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition-all ${selectedImage === img ? "border-primary shadow-md" : "border-transparent hover:border-primary/50"
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.name} view ${idx + 1}`}
                                            className="h-full w-full object-contain p-1 mix-blend-multiply"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                                {t("products.description", "Descrição")}
                            </h4>
                            <div className="space-y-2">
                                {t(`product.${product.id}.description`, product.description)
                                    .split('.')
                                    .filter(sentence => sentence.trim().length > 0)
                                    .map((sentence, index) => (
                                        <div
                                            key={index}
                                            className="bg-surface border border-border/50 rounded-xl p-3 text-sm text-muted-foreground shadow-sm relative"
                                        >
                                            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-surface border-l border-b border-border/50 rotate-45"></div>
                                            {sentence.trim()}.
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t">
                            <div className="flex flex-col">
                                <span className="text-sm text-muted-foreground">{t("products.price", "Preço")}</span>
                                <span className="text-2xl font-bold text-primary">
                                    CHF {product.price.toFixed(2)}
                                </span>
                            </div>
                            {product.size && (
                                <div className="flex flex-col items-end">
                                    <span className="text-sm text-muted-foreground">{t("products.size", "Tamanho")}</span>
                                    <span className="font-medium">{product.size}</span>
                                </div>
                            )}
                        </div>

                        {/* WhatsApp Button */}
                        <Button
                            onClick={handleWhatsAppClick}
                            className="w-full mt-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold h-12 text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-6 w-6"
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            {t("whatsapp.button", "Comprar no WhatsApp")}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetails;
