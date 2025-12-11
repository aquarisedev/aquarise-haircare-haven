import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  name: string;
  brand: string;
  size?: string;
  price: number;
  rating?: number;
  image?: string;
  featured?: boolean;
  onClick?: () => void;
  imageClassName?: string;
  originalPriceDisplay?: number;
  isChristmasPromo?: boolean;
  enablePromoVisuals?: boolean;
}

const ProductCard = ({
  name,
  brand,
  size,
  price,
  rating,
  image,
  featured,
  onClick,
  imageClassName,
  originalPriceDisplay,
  isChristmasPromo,
  enablePromoVisuals = false,
}: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <div
      onClick={onClick}
      className={`group animate-fade-in card-shadow hover:card-shadow-hover overflow-hidden rounded-xl bg-surface transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full ${isChristmasPromo && enablePromoVisuals ? "border-2 animate-christmas-flash" : ""}`}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
        {image && image !== "/placeholder.svg" ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply ${imageClassName || "p-6"}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100">
            {/* Placeholder for missing images */}
            <span className="text-4xl text-gray-300 font-bold">{brand[0]}</span>
          </div>
        )}
        {featured && (!isChristmasPromo) && (
          <div className="absolute left-0 top-3 flex flex-col gap-1">
            <span className="bg-[#1e3a8a] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
              30% OFF
            </span>
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
              {t("products.featured_badge", "BEST SELLER")}
            </span>
          </div>
        )}
        {isChristmasPromo && (
          <div className="absolute left-0 top-3 flex flex-col gap-1 z-10">
            <span className="bg-red-600 text-white text-[11px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm flex items-center gap-1 animate-pulse">
              🎅 {t("promo.christmas.tag", "PROMOÇÃO DE NATAL")}
            </span>
            <span className="bg-white text-red-600 text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm border border-red-600">
              {t("promo.christmas.offer", "OFERTA ESPECIAL")}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2">
          <span
            className="text-xs font-semibold text-muted-foreground uppercase tracking-wide"
          >
            {brand}
          </span>
        </div>

        <h3 className={`mb-2 line-clamp-2 font-semibold text-foreground min-h-[3rem] ${brand === 'GOLDSPELL' ? "font-['Playfair_Display'] tracking-wide text-[1.1rem]" : ""}`}>
          {name}
        </h3>

        {size && <p className="mb-2 text-xs text-muted-foreground">{size}</p>}

        {/* Rating - Only show if rating exists */}
        {rating !== undefined && (
          <div className="mb-3 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
                  }`}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">({rating})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mt-auto pt-2 flex-wrap gap-1">
          {originalPriceDisplay && enablePromoVisuals ? (
            <div className="flex flex-col items-start w-full">
              <span className="text-xs text-muted-foreground line-through">
                De: CHF {originalPriceDisplay.toFixed(2)}
              </span>
              <span className="text-xl font-bold text-red-600">
                Por: CHF {price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="text-xl font-bold text-primary">
              CHF {price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
