import { Search, Instagram, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const changeLanguage = (lng: string) => {
    console.log("Changing language to:", lng);
    i18n.changeLanguage(lng);
  };

  console.log("Current language:", i18n.language);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim()) {
        navigate(`/?search=${encodeURIComponent(searchQuery.trim())}#produtos`);
      } else {
        navigate("/");
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface shadow-sm">
      {/* Top Bar */}
      <div className="gradient-primary py-2 text-center text-sm text-white">
        <p className="px-4">
          {t("header.shipping")}
        </p>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
            <div className="flex flex-col">
              <h1 className="gradient-text text-2xl font-bold font-heading">
                Aquarise
              </h1>
              <span className="hidden text-xs text-muted-foreground sm:block">
                @aquariseshop
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden flex-1 max-w-xl lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t("search.placeholder")}
                className="pl-10 bg-muted border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("pt-BR")}>
                  🇧🇷 Português (BR)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("pt-PT")}>
                  🇵🇹 Português (PT)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  🇺🇸 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("fr-CH")}>
                  🇨🇭 Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("es")}>
                  🇪🇸 Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://wa.me/5511999999999" // Placeholder number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://instagram.com/aquariseshop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="mt-3 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("search.placeholder")}
              className="pl-10 bg-muted border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-border bg-surface">
        <div className="container mx-auto px-4">
          <ul className="hidden items-center justify-center gap-8 py-3 text-sm font-medium lg:flex">
            <li>
              <a
                href="/"
                className="text-foreground transition-colors hover:text-primary"
              >
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a
                href="#produtos"
                className="text-foreground transition-colors hover:text-primary"
              >
                {t("nav.products")}
              </a>
            </li>
            <li>
              <button
                onClick={() => navigate("/?search=HASKELL#produtos")}
                className="text-foreground transition-colors hover:text-primary"
              >
                HASKELL
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/?search=LOLA#produtos")}
                className="text-foreground transition-colors hover:text-primary"
              >
                LOLA
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/?search=EUDORA#produtos")}
                className="text-foreground transition-colors hover:text-primary"
              >
                EUDORA
              </button>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-foreground transition-colors hover:text-primary"
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-foreground transition-colors hover:text-primary"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[280px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="gradient-text text-2xl font-bold font-heading">
              Aquarise
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8">
            <ul className="space-y-1">
              <li>
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">{t("nav.home")}</span>
                </a>
              </li>
              <li>
                <a
                  href="/#produtos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">{t("nav.products")}</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/?search=HASKELL#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">HASKELL</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/?search=LOLA#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">LOLA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/?search=EUDORA#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">EUDORA</span>
                </button>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">{t("nav.about")}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">{t("nav.contact")}</span>
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6">
              <a
                href="https://instagram.com/aquariseshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-medium">@aquariseshop</span>
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
