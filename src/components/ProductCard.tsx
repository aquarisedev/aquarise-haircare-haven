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
}: ProductCardProps) => {
  const { t } = useTranslation();
  return (
    <div
      onClick={onClick}
      className="group animate-fade-in card-shadow hover:card-shadow-hover overflow-hidden rounded-xl bg-surface transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5]">
        {image && image !== "/placeholder.svg" ? (
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply ${imageClassName || "p-6"}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100">
            {/* Placeholder for missing images */}
            <span className="text-4xl text-gray-300 font-bold">{brand[0]}</span>
          </div>
        )}
        {featured && (
          <div className="absolute left-0 top-3 flex flex-col gap-1">
            <span className="bg-[#1e3a8a] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
              30% OFF
            </span>
            <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider shadow-sm">
              {t("products.featured_badge", "BEST SELLER")}
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

        <h3 className="mb-2 line-clamp-2 font-semibold text-foreground min-h-[3rem]">
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
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-xl font-bold text-primary">
            CHF {price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
