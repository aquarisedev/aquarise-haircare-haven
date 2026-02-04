import {
  Waves,
  Sparkles,
  ShieldPlus,
  Droplets,
  Leaf,
  TrendingUp,
  Wind,
  Activity,
  RefreshCw,
  Feather,
  Droplet,
  Umbrella,
  Calendar,
  User,
  SprayCan
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Categories = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = [
    {
      name: t("categories.cachos"),
      id: "CACHOS PERFEITOS",
      icon: Waves,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.loiros"),
      id: "LOIROS ILUMINADOS",
      icon: Sparkles,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.reconstrucao"),
      id: "RECONSTRUÇÃO",
      icon: ShieldPlus,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.hidratacao"),
      id: "HIDRATAÇÃO",
      icon: Droplets,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.hidratacao_corporal"),
      id: "HIDRATAÇÃO CORPORAL",
      icon: Droplet,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.nutricao"),
      id: "NUTRIÇÃO",
      icon: Leaf,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.crescimento"),
      id: "CRESCIMENTO/FORTALECIMENTO",
      icon: TrendingUp,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.alisamento"),
      id: "ALISAMENTO/CONTROLE DE FRIZZ",
      icon: Wind,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.ondulados"),
      id: "ONDULADOS",
      icon: Activity,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.transicao"),
      id: "TRANSIÇÃO CAPILAR",
      icon: RefreshCw,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.cronograma"),
      id: "CRONOGRAMA CAPILAR COMPLETO",
      icon: Calendar,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.finalizadores"),
      id: "FINALIZADORES",
      icon: Sparkles,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.oleos"),
      id: "OLEOS",
      icon: Droplet,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.corpo_banho"),
      id: "CORPO E BANHO",
      icon: Droplets,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.skincare"),
      id: "SKINCARE",
      icon: Sparkles,
      gradient: "from-primary to-secondary",
    },
    {
      name: t("categories.perfumes"),
      id: "PERFUMARIA",
      icon: SprayCan,
      gradient: "from-primary to-secondary",
    },
  ];

  const handleCategoryClick = (groupId: string) => {
    navigate(`/?group=${encodeURIComponent(groupId)}`);
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Estado do Carrossel
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  // Auto-scroll a cada 20s (20000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 20000);
    return () => clearInterval(interval);
  }, [totalPages, currentPage]); // Reiniciar timer ao mudar de página (manual ou automático)

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const visibleCategories = categories.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Processamento de swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Próxima página
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }
    if (isRightSwipe) {
      // Página anterior (lidar com o loop corretamente)
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-surface/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold font-heading lg:text-4xl animate-fade-in">
          {t("categories.title")}
        </h2>

        {/* Carousel Content */}
        <div
          className="relative min-h-[160px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-500">
            {visibleCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="group animate-fade-in card-shadow hover:card-shadow-hover cursor-pointer rounded-xl bg-surface p-4 lg:p-6 text-center transition-all hover:-translate-y-2 border border-border/50 hover:border-primary/20"
                >
                  <div
                    className={`mx-auto mb-3 flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h3 className="text-sm lg:text-base font-semibold text-foreground line-clamp-2">
                    {category.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handlePageChange(idx)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentPage === idx
                ? "bg-primary w-6"
                : "bg-border hover:bg-primary/50"
                }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
