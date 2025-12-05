import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hair-afro.jpg";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold font-heading leading-tight lg:text-6xl">
              {t("hero.title")}{" "}
              <span className="gradient-text">{t("hero.title_highlight")}</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="gradient" size="lg">
                {t("hero.cta_new")}
              </Button>
              <Button variant="outline" size="lg">
                {t("hero.cta_promo")}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <img
              src={heroImage}
              alt={t("hero.image_alt")}
              className="rounded-2xl shadow-elegant hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
