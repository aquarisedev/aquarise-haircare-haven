import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useTranslation } from "react-i18next";

const ChristmasPromo = () => {
    const { t } = useTranslation();
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

    const promoProducts = products.filter((p) => p.isChristmasPromo);

    const product = selectedProduct
        ? products.find((p) => p.id === selectedProduct) || null
        : null;

    return (
        <section id="christmas-promo" className="py-16 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
            {/* Decorative Lights (Bolinhas Pisca-Pisca) */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-2 py-4 overflow-hidden pointer-events-none">
                {Array.from({ length: 40 }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-4 h-4 rounded-full shadow-md animate-pulse ${i % 3 === 0 ? "bg-red-500" : i % 3 === 1 ? "bg-green-500" : "bg-yellow-400"
                            }`}
                        style={{ animationDelay: `${Math.random() * 2}s` }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-sm font-bold tracking-wider mb-4 border border-red-200">
                        🎅 {t("promo.christmas.badge")}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-red-700 mb-4 drop-shadow-sm">
                        {t("promo.christmas.title")}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t("promo.christmas.subtitle")} <br />
                        <span className="font-bold text-red-600">{t("promo.christmas.limited")}</span>
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                    {promoProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            enablePromoVisuals={true}
                            onClick={() => setSelectedProduct(product.id)}
                        />
                    ))}
                </div>
            </div>

            <ProductDetails
                product={product}
                open={!!selectedProduct}
                onOpenChange={(open) => !open && setSelectedProduct(null)}
            />
        </section>
    );
};

export default ChristmasPromo;
