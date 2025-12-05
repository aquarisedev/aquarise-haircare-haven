import ProductCard from "./ProductCard";
import { products, Product } from "@/data/products";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const ProductGrid = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const groupParam = searchParams.get("group");
  const productIdParam = searchParams.get("product");

  // Sync URL with selected product
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

  // Filter products based on search query OR group
  let filteredProducts = products;

  if (searchQuery) {
    filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.brand.toLowerCase().includes(searchQuery) ||
      product.collection?.toLowerCase().includes(searchQuery)
    );
  } else if (groupParam) {
    filteredProducts = products.filter((product) =>
      product.groups?.includes(groupParam)
    );
  }

  // Group products by Brand and then by Collection (only if no search query)
  // We apply grouping to the filtered list (which might be all products or just a specific category)
  const groupedProducts = !searchQuery
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
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold font-heading lg:text-4xl">
            {searchQuery
              ? t("search.results", "Resultados da Busca")
              : groupParam
                ? groupParam
                : t("products.featured")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {searchQuery
              ? `${filteredProducts.length} ${t("search.found", "produtos encontrados para")} "${searchQuery}"`
              : groupParam
                ? `${filteredProducts.length} produtos encontrados nesta categoria`
                : t("products.subtitle")}
          </p>

          {groupParam && (
            <button
              onClick={handleClearFilter}
              className="mt-4 text-sm text-primary hover:underline font-medium"
            >
              Limpar Filtro
            </button>
          )}
        </div>

        {searchQuery ? (
          // Search Results View (Flat Grid)
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
          // Default Grouped View (Brand -> Collection)
          Object.entries(groupedProducts).length > 0 ? (
            Object.entries(groupedProducts).map(([brand, collections]) => (
              <div key={brand} id={brand.toLowerCase()} className="mb-16">
                <h3 className="mb-8 text-2xl font-bold text-primary border-b pb-2">
                  {brand}
                </h3>
                {Object.entries(collections).map(([collection, collectionProducts]) => (
                  <div key={collection} className="mb-12">
                    <h4 className="mb-6 text-xl font-semibold text-secondary">
                      {collection !== "Outros" ? collection : t("products.collection")}
                    </h4>
                    <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide sm:grid sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
                      {collectionProducts.map((product) => (
                        <div key={product.id} className="min-w-[280px] snap-center sm:min-w-0">
                          <ProductCard
                            {...product}
                            onClick={() => handleProductClick(product)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
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
    </section>
  );
};

export default ProductGrid;
