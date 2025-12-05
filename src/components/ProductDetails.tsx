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

interface ProductDetailsProps {
    product: Product | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ProductDetails = ({ product, open, onOpenChange }: ProductDetailsProps) => {
    const { t } = useTranslation();

    if (!product) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <div className="flex items-start justify-between">
                        <div>
                            <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
                            <DialogDescription className="text-lg text-primary font-semibold">
                                {product.brand} - {product.collection}
                            </DialogDescription>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
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
                    <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
                        {product.image && product.image !== "/placeholder.svg" ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className={`h-full w-full object-contain ${product.imageClassName || "p-4"}`}
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center bg-gray-100">
                                <span className="text-6xl text-gray-300 font-bold">{product.brand[0]}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-semibold mb-1">{t("products.description", "Descrição")}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {t(`product.${product.id}.description`, product.description)}
                            </p>
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
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ProductDetails;
