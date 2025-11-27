import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  brand: string;
  size: string;
  price: number;
  rating: number;
  image?: string;
  featured?: boolean;
}

const ProductCard = ({
  name,
  brand,
  size,
  price,
  rating,
  image,
  featured,
}: ProductCardProps) => {
  return (
    <div className="group animate-fade-in card-shadow hover:card-shadow-hover overflow-hidden rounded-xl bg-surface transition-all hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground/20" />
          </div>
        )}
        {featured && (
          <Badge className="absolute left-3 top-3 bg-secondary text-white">
            Destaque
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <Badge
          variant="outline"
          className="mb-2 border-primary text-primary text-xs"
        >
          {brand}
        </Badge>
        <h3 className="mb-1 line-clamp-2 font-semibold text-foreground">
          {name}
        </h3>
        <p className="mb-2 text-xs text-muted-foreground">{size}</p>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">({rating})</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            CHF {price.toFixed(2)}
          </span>
          <Button size="sm" variant="gradient">
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
