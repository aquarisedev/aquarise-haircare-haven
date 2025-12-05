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
  Calendar
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      gradient: "from-secondary to-accent",
    },
    {
      name: t("categories.reconstrucao"),
      id: "RECONSTRUÇÃO",
      icon: ShieldPlus,
      gradient: "from-accent to-primary",
    },
    {
      name: t("categories.hidratacao"),
      id: "HIDRATAÇÃO",
      icon: Droplets,
      gradient: "from-primary via-secondary to-accent",
    },
    {
      name: t("categories.nutricao"),
      id: "NUTRIÇÃO",
      icon: Leaf,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      name: t("categories.crescimento"),
      id: "CRESCIMENTO/FORTALECIMENTO",
      icon: TrendingUp,
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      name: t("categories.alisamento"),
      id: "ALISAMENTO/CONTROLE DE FRIZZ",
      icon: Wind,
      gradient: "from-purple-400 to-pink-600",
    },
    {
      name: t("categories.ondulados"),
      id: "ONDULADOS",
      icon: Activity,
      gradient: "from-orange-400 to-red-600",
    },
    {
      name: t("categories.transicao"),
      id: "TRANSIÇÃO CAPILAR",
      icon: RefreshCw,
      gradient: "from-teal-400 to-cyan-600",
    },
    {
      name: t("categories.lowpoo"),
      id: "LOW POO/NO POO",
      icon: Feather,
      gradient: "from-lime-400 to-green-600",
    },
    {
      name: t("categories.oleosidade"),
      id: "CONTROLE DE OLEOSIDADE",
      icon: Droplet,
      gradient: "from-cyan-400 to-blue-600",
    },
    {
      name: t("categories.protecao"),
      id: "PROTEÇÃO UNIVERSAL",
      icon: Umbrella,
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      name: t("categories.cronograma"),
      id: "CRONOGRAMA CAPILAR COMPLETO",
      icon: Calendar,
      gradient: "from-rose-400 to-pink-600",
    },
  ];

  const handleCategoryClick = (groupId: string) => {
    // Navigate to home with group query param
    navigate(`/?group=${encodeURIComponent(groupId)}`);

    // Scroll to product grid
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
      productGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-surface/50">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold font-heading lg:text-4xl animate-fade-in">
          {t("categories.title")}
        </h2>

        {/* Horizontal scroll for mobile */}
        <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible scrollbar-hide overscroll-x-contain">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.id)}
                className="min-w-[160px] flex-shrink-0 snap-center group animate-slide-up card-shadow hover:card-shadow-hover cursor-pointer rounded-xl bg-surface p-4 lg:p-6 text-center transition-all hover:-translate-y-2 border border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.05}s` }}
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
    </section>
  );
};

export default Categories;
