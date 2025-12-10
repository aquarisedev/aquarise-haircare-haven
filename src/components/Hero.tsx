import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hair-afro.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt={t("hero.image_alt")}
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="mb-4 text-4xl font-bold font-heading leading-tight lg:text-7xl uppercase tracking-wider drop-shadow-md">
          {t("hero.title")} <span className="gradient-text">{t("hero.title_highlight")}</span>
        </h1>
        <p className="mb-8 text-lg lg:text-2xl font-light drop-shadow-sm max-w-2xl">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            className="bg-white text-primary hover:bg-gray-100 border-none font-semibold px-8 py-6 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
          >
            {t("hero.cta_new")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
