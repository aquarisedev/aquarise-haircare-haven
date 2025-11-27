import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-20 bg-surface border-t border-border">
      {/* Newsletter */}
      <div className="gradient-primary py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-2 text-2xl font-bold font-heading text-white">
            Receba Ofertas Exclusivas
          </h3>
          <p className="mb-6 text-white/90">
            Cadastre-se e ganhe 10% na primeira compra!
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="bg-white border-white"
            />
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90">
              Cadastrar
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div>
              <h4 className="gradient-text mb-4 text-xl font-bold font-heading">
                Aquarise
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Cuidados premium para seus cabelos com os melhores produtos
                HASKELL e LOLA na Suíça.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/aquariseshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white transition-transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Produtos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#haskell" className="hover:text-primary transition-colors">
                    HASKELL
                  </a>
                </li>
                <li>
                  <a href="#lola" className="hover:text-primary transition-colors">
                    LOLA
                  </a>
                </li>
                <li>
                  <a href="#novidades" className="hover:text-primary transition-colors">
                    Novidades
                  </a>
                </li>
                <li>
                  <a href="#promocoes" className="hover:text-primary transition-colors">
                    Promoções
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">
                Atendimento
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#contato" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#entregas" className="hover:text-primary transition-colors">
                    Entregas
                  </a>
                </li>
                <li>
                  <a href="#trocas" className="hover:text-primary transition-colors">
                    Trocas e Devoluções
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contato</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Suíça</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:contato@aquarise.ch" className="hover:text-primary transition-colors">
                    contato@aquarise.ch
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+41 XXX XXX XXX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Aquarise. Desenvolvido com ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
