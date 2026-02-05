import ProductCard from "./ProductCard";
import { products, Product } from "@/data/products";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, SlidersHorizontal, AlignRight } from "lucide-react";

const ProductCollectionSection = ({
  collection,
  products,
  onProductClick
}: {
  collection: string;
  products: Product[];
  onProductClick: (product: Product) => void;
}) => {
  const { t } = useTranslation();
  // Contagem inicial visível: 4 (1 linha no desktop)
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleShowLess = () => {
    setVisibleCount(4);
  };

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const canShowLess = visibleCount > 4;

  return (
    <div className="mb-12">
      <h4 className="mb-6 text-xl font-semibold text-secondary">
        {collection !== "Outros" ? collection : t("products.collection")}
      </h4>

      {/* Mobile: Horizontal Scroll (All Products) */}
      <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide sm:hidden overscroll-x-contain">
        {products.map((product) => (
          <div key={product.id} className="min-w-[280px] snap-center">
            <ProductCard
              {...product}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </div>

      {/* Desktop: Grid (Visible Products) */}
      <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <div key={product.id} className="min-w-0">
            <ProductCard
              {...product}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </div>

      {/* Show More / Show Less Buttons (Desktop Only) */}
      <div className="hidden sm:flex mt-6 justify-center gap-4">
        {hasMore && (
          <Button
            variant="outline"
            onClick={handleShowMore}
            className="flex items-center gap-2"
          >
            {t("products.showMore", "Mostrar mais")}
            <ChevronDown className="h-4 w-4" />
          </Button>
        )}

        {canShowLess && (
          <Button
            variant="ghost"
            onClick={handleShowLess}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary"
          >
            {t("products.showLess", "Mostrar menos")}
            <ChevronUp className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const groupParam = searchParams.get("group");
  const brandParam = searchParams.get("brand");
  const productIdParam = searchParams.get("product");

  // Sincronizar URL com produto selecionado
  useEffect(() => {
    if (productIdParam) {
      const product = products.find((p) => p.id === Number(productIdParam));
      if (product) {
        setSelectedProduct(product);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [productIdParam]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("product", product.id.toString());
      return newParams;
    });
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("product");
      return newParams;
    });
  };

  const handleClearFilter = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("group");
      return newParams;
    });
  };

  // Filtrar produtos baseado na consulta de busca OU grupo
  let filteredProducts = products;

  if (searchQuery) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery) ||
      product.collection?.toLowerCase().includes(searchQuery)
    );
  } else if (brandParam) {
    if (brandParam === "ACESSORIOS") {
      filteredProducts = products.filter((product) =>
        (product.brand as string) === "ACESSORIOS" ||
        product.category === "Acessórios" ||
        product.groups?.includes("ACESSÓRIOS") ||
        // Fallback robusto para garantir que a escova apareça
        product.id === 800
      );
    } else {
      filteredProducts = products.filter((product) =>
        product.brand === brandParam
      );
    }
  } else if (groupParam) {
    filteredProducts = products.filter((product) =>
      product.groups?.includes(groupParam)
    );
  }

  // Agrupar produtos por Marca e depois por Coleção (apenas se não houver consulta de busca OU se houver filtro de marca)
  // Aplicamos o agrupamento à lista filtrada (que pode ser todos os produtos ou apenas uma categoria específica)
  const groupedProducts = (!searchQuery || brandParam)
    ? filteredProducts.reduce((acc, product) => {
      const brand = product.brand;
      const collection = product.collection || "Outros";

      if (!acc[brand]) {
        acc[brand] = {};
      }
      if (!acc[brand][collection]) {
        acc[brand][collection] = [];
      }
      acc[brand][collection].push(product);
      return acc;
    }, {} as Record<string, Record<string, typeof products>>)
    : {};

  return (
    <section id="product-grid" className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          {!searchQuery && !groupParam && !brandParam && (
            <>
              {/* Filter Bar mimicking O Boticário */}
              <div className="flex border-y border-border mb-8 sticky top-[60px] bg-background z-20">
                <button className="flex-1 py-4 flex items-center justify-center gap-2 border-r border-border hover:bg-muted/50 transition-colors uppercase text-sm font-bold tracking-wider">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>{t("filters.title", "FILTROS")}</span>
                </button>
                <button className="flex-1 py-4 flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors uppercase text-sm font-bold tracking-wider">
                  <span>{t("filters.orderBy", "ORDENAR POR")}</span>
                  <AlignRight className="w-4 h-4" />
                </button>
              </div>

              <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl">
                {t("products.featured")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("products.subtitle")}
              </p>
            </>
          )}
        </div>

        {/* Se tiver brandParam, queremos a visualização agrupada, exceto para ACESSORIOS que deve ser uma lista única */}
        {(searchQuery || brandParam === "ACESSORIOS") && (brandParam !== "ACESSORIOS" ? !brandParam : true) ? (
          // Visualização de Resultados de Busca ou Categoria Acessórios (Grade Plana)
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => handleProductClick(product)}
              />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-muted-foreground">
                  {t("search.noResults", "Nenhum produto encontrado.")}
                </p>
              </div>
            )}
          </div>
        ) : (
          // Visualização Agrupada Padrão (Marca -> Coleção)
          Object.entries(groupedProducts).length > 0 ? (
            Object.entries(groupedProducts).map(([brand, collections]) => (
              <div key={brand} id={brand.toLowerCase()} className="mb-16">
                <h3 className="mb-8 text-2xl font-bold text-primary border-b pb-2">
                  {brand}
                </h3>
                {Object.entries(collections).map(([collection, collectionProducts]) => (
                  <ProductCollectionSection
                    key={collection}
                    collection={collection}
                    products={collectionProducts}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )
        )}

        <div className="mt-12 text-center">
          <a
            href="#todos-produtos"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {t("products.viewAll")}
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>

      <ProductDetails
        product={selectedProduct}
        open={!!selectedProduct}
        onOpenChange={(open) => !open && handleCloseModal()}
      />
    </section >
  );
};

export default ProductGrid;
