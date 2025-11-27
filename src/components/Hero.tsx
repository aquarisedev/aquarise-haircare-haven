import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hair-afro.jpg";

const Hero = () => {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="mb-6 text-4xl font-bold font-heading leading-tight lg:text-6xl">
              Cuidados Premium para seus{" "}
              <span className="gradient-text">Cabelos</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
              Descubra a linha completa HASKELL e LOLA com os melhores preços
              da Suíça
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button variant="gradient" size="lg">
                Ver Novidades
              </Button>
              <Button variant="outline" size="lg">
                Produtos em Promoção
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <img
              src={heroImage}
              alt="Cabelos saudáveis e brilhantes"
              className="rounded-2xl shadow-elegant hover-scale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
