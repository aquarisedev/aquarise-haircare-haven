
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ProductDetails from "@/components/ProductDetails";

const BrandPage = () => {
    const { brand } = useParams<{ brand: string }>();
    const { t } = useTranslation();
    const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    // Normalize brand name from URL
    const normalizedBrandParam = brand?.toUpperCase();
    const isAccessories = normalizedBrandParam === "ACESSORIOS" || normalizedBrandParam === "ACESSÓRIOS";

    // Filter products by Brand (or special case for Accessories)
    const brandProducts = products.filter(p => {
        if (isAccessories) {
            return (
                p.brand === "AQUARISE" ||
                p.category === "Acessórios" ||
                p.groups?.includes("ACESSÓRIOS")
            );
        }
        return p.brand.toLowerCase() === brand?.toLowerCase();
    });

    // Display Name
    const displayBrand = isAccessories ? "Acessórios" : brand;

    // Extract available filters from brand products
    const collections = Array.from(new Set(brandProducts.map(p => p.collection).filter(Boolean))) as string[];
    const categories = Array.from(new Set(brandProducts.map(p => p.category).filter(Boolean))) as string[];
    const allGroups = brandProducts.flatMap(p => p.groups || []);
    const groups = Array.from(new Set(allGroups.filter(Boolean)));

    // Apply Side Filters
    const filteredProducts = brandProducts.filter(product => {
        const matchesCollection = selectedCollections.length === 0 || (product.collection && selectedCollections.includes(product.collection));
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesGroup = selectedGroups.length === 0 || (product.groups && product.groups.some(g => selectedGroups.includes(g)));

        return matchesCollection && matchesCategory && matchesGroup;
    });

    const toggleFilter = (item: string, current: string[], setFn: (val: string[]) => void) => {
        if (current.includes(item)) {
            setFn(current.filter(i => i !== item));
        } else {
            setFn([...current, item]);
        }
    };

    // Scroll to top on brand change
    useEffect(() => {
        window.scrollTo(0, 0);
        setSelectedCollections([]);
        setSelectedCategories([]);
        setSelectedGroups([]);
    }, [brand]);

    // Helper to normalize keys for translation
    const normalizeKey = (key: string) => {
        return key
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_|_$/g, "");
    };

    const FilterContent = () => (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold mb-4 text-lg">{t("products.collection")}</h3>
                <div className="space-y-2">
                    {collections.map(col => (
                        <div key={col} className="flex items-center space-x-2">
                            <Checkbox
                                id={`col-${col}`}
                                checked={selectedCollections.includes(col)}
                                onCheckedChange={() => toggleFilter(col, selectedCollections, setSelectedCollections)}
                            />
                            <label htmlFor={`col-${col}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                {col}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-px bg-border my-4" />

            <div>
                <h3 className="font-semibold mb-4 text-lg">{t("products.category")}</h3>
                <div className="space-y-2">
                    {categories.map(cat => (
                        <div key={cat} className="flex items-center space-x-2">
                            <Checkbox
                                id={`cat-${cat}`}
                                checked={selectedCategories.includes(cat)}
                                onCheckedChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                            />
                            <label htmlFor={`cat-${cat}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                {t(`categories.${normalizeKey(cat)}`, cat)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-px bg-border my-4" />

            <div>
                <h3 className="font-semibold mb-4 text-lg">{t("products.goal_type")}</h3>
                <div className="space-y-2">
                    {groups.map(grp => (
                        <div key={grp} className="flex items-center space-x-2">
                            <Checkbox
                                id={`grp-${grp}`}
                                checked={selectedGroups.includes(grp)}
                                onCheckedChange={() => toggleFilter(grp, selectedGroups, setSelectedGroups)}
                            />
                            <label htmlFor={`grp-${grp}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer capitalize">
                                {t(`groups.${normalizeKey(grp)}`, grp.toLowerCase())}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background animate-in fade-in duration-700">
            <Header />

            {/* Brand Hero */}
            <div className="relative h-48 md:h-64 overflow-hidden bg-primary/5">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="container mx-auto px-4 h-full flex items-center relative z-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary uppercase tracking-tight transform transition-all hover:scale-105 duration-500">
                        {displayBrand}
                    </h1>
                </div>
                {/* Abstract Background Element */}
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            </div>

            <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar (Desktop) */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <SlidersHorizontal className="h-5 w-5" />
                                {t("filters.title", "Filtros")}
                            </h2>
                            <FilterContent />
                        </div>
                    </aside>

                    {/* Mobile Filter Trigger */}
                    <div className="lg:hidden mb-6">
                        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" className="w-full flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <SlidersHorizontal className="h-4 w-4" />
                                        Filtros
                                    </span>
                                    {selectedCollections.length + selectedCategories.length + selectedGroups.length > 0 && (
                                        <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                            {selectedCollections.length + selectedCategories.length + selectedGroups.length}
                                        </span>
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-full sm:w-[350px] overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>Filtros</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8">
                                    <FilterContent />
                                </div>
                                <div className="mt-8 pt-4 border-t sticky bottom-0 bg-background pb-4">
                                    <Button className="w-full" onClick={() => setIsMobileFilterOpen(false)}>
                                        Ver Resultados ({filteredProducts.length})
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-6 flex items-center justify-between">
                            <p className="text-muted-foreground">
                                {filteredProducts.length} {t("search.found", "produtos encontrados")}
                            </p>
                            {/* Sort could go here */}
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <ProductCard
                                            {...product}
                                            onClick={() => handleProductClick(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-muted/30 rounded-lg">
                                <p className="text-xl text-muted-foreground">
                                    {t("search.noResults", "Nenhum produto encontrado com os filtros selecionados.")}
                                </p>
                                <Button
                                    variant="link"
                                    onClick={() => {
                                        setSelectedCollections([]);
                                        setSelectedCategories([]);
                                        setSelectedGroups([]);
                                    }}
                                    className="mt-2"
                                >
                                    Limpar filtros
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </main >

            <ProductDetails
                product={selectedProduct}
                open={!!selectedProduct}
                onOpenChange={(open) => !open && handleCloseModal()}
            />

            <Footer />
        </div >
    );
};

export default BrandPage;
