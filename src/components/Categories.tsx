import { Waves, Sparkles, Heart, Droplets } from "lucide-react";

const categories = [
  {
    name: "Cachos Perfeitos",
    icon: Waves,
    gradient: "from-primary to-secondary",
  },
  {
    name: "Loiros Iluminados",
    icon: Sparkles,
    gradient: "from-secondary to-accent",
  },
  {
    name: "Reconstrução",
    icon: Heart,
    gradient: "from-accent to-primary",
  },
  {
    name: "Hidratação",
    icon: Droplets,
    gradient: "from-primary via-secondary to-accent",
  },
];

const Categories = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-heading lg:text-4xl">
          Explore por Categoria
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group animate-slide-up card-shadow hover:card-shadow-hover cursor-pointer rounded-xl bg-surface p-6 text-center transition-all hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${category.gradient} shadow-lg`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground">
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
