import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-20 bg-surface border-t border-border">
      {/* Rodapé Principal */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Sobre */}
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
                  href="https://www.instagram.com/aquariseshop?igsh=MXhiaDFpN3dnbnUwdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white transition-transform hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Produtos */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Produtos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/?search=HASKELL" className="hover:text-primary transition-colors">
                    HASKELL
                  </a>
                </li>
                <li>
                  <a href="/?search=LOLA" className="hover:text-primary transition-colors">
                    LOLA
                  </a>
                </li>
                <li>
                  <a href="/?search=EUDORA" className="hover:text-primary transition-colors">
                    EUDORA
                  </a>
                </li>
                <li>
                  <a href="/?search=GOLDSPELL" className="hover:text-primary transition-colors">
                    GOLDSPELL
                  </a>
                </li>
                <li>
                  <a href="#promocoes" className="hover:text-primary transition-colors">
                    Promoções
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">
                Atendimento
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#contato" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#entregas" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">
                    Entregas
                  </a>
                </li>
                <li>
                  <a href="#trocas" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">
                    Trocas e Devoluções
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Contato</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Avenue de Jolimont 30, 1008 Prilly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <a href="mailto:Aquariseecomerce@gmail.com" className="hover:text-primary transition-colors">
                    Aquariseecomerce@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+41 76 683 05 15</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Aquarise. Desenvolvido pela NeoVertex</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
