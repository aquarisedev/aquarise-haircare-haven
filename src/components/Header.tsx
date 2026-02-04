import { Search, Instagram, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchQuery.trim()) {
        navigate(`/?search=${encodeURIComponent(searchQuery.trim())}#produtos`);
      } else {
        navigate("/");
      }
      setMobileMenuOpen(false);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface shadow-sm">
      {/* Barra Superior */}
      <div className="gradient-primary py-2 text-center text-sm text-white">
        <p className="px-4">
          {t("header.shipping")}
        </p>
      </div>

      {/* Cabeçalho Principal */}
      <div className="container mx-auto px-4 relative h-20 flex items-center justify-between">
        <div className="flex items-center justify-between w-full h-full">
          {/* Esquerda: Menu e Busca (Mobile) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <DialogTrigger asChild>
                <button aria-label="Buscar">
                  <Search className="h-6 w-6 text-foreground" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] top-[20%] translate-y-0">
                <DialogDescription className="sr-only">
                  {t("search.placeholder")}
                </DialogDescription>
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold">{t("search.placeholder")}</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder={t("search.placeholder")}
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearch}
                      autoFocus
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Logo Centralizado */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <a href="/" aria-label="Home">
              <div
                className="gradient-primary h-28 w-56 sm:h-40 sm:w-80 lg:h-48 lg:w-96"
                style={{
                  maskImage: "url(/logo-aquarise.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: "url(/logo-aquarise.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
                role="img"
                aria-label="Aquarise"
              />
            </a>
          </div>

          {/* Search moved to navbar */}

          {/* Espaço vazio para balancear o layout (mobile) */}
          <div className="w-16 lg:hidden"></div>
        </div>
      </div>

      {/* Menu de Navegação */}
      <nav className="border-t border-border bg-surface">
        <div className="w-full px-12">
          <div className="hidden items-center justify-between py-3 lg:flex">
            {/* Menu Items */}
            <ul className="flex items-center gap-12 text-sm font-medium">
              <li>
                <a
                  href="/"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {t("nav.home")}
                </a>
              </li>

              <li>
                <button
                  onClick={() => navigate("/?brand=HASKELL#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  HASKELL
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/?brand=LOLA#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  LOLA
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/?brand=EUDORA#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  EUDORA
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/?brand=NATURA#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  NATURA
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/?brand=BOTICARIO#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  O BOTICÁRIO
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/?brand=GOLDSPELL#produtos")}
                  className="text-foreground transition-colors hover:text-primary"
                >
                  GOLDSPELL
                </button>
              </li>
            </ul>

            {/* Icons aligned with menu */}
            <div className="flex items-center gap-2">
              <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5 text-foreground" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] top-[20%] translate-y-0">
                  <DialogDescription className="sr-only">
                    {t("search.placeholder")}
                  </DialogDescription>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">{t("search.placeholder")}</h3>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder={t("search.placeholder")}
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                        autoFocus
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

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
                  href="https://wa.me/41766830515"
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
                  href="https://www.instagram.com/aquariseshop?igsh=MXhiaDFpN3dnbnUwdg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Gaveta do Menu Mobile */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[280px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>
              <div
                className="gradient-primary h-16 w-56"
                style={{
                  maskImage: "url(/logo-aquarise.png)",
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "left center",
                  WebkitMaskImage: "url(/logo-aquarise.png)",
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left center",
                }}
                role="img"
                aria-label="Aquarise"
              />
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
                <button
                  onClick={() => {
                    navigate("/?search=NATURA#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">NATURA</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/?search=BOTICARIO#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">O BOTICÁRIO</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/?search=GOLDSPELL#produtos");
                    setMobileMenuOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">GOLDSPELL</span>
                </button>
              </li>


            </ul>

            <div className="mt-8 border-t border-border pt-6 space-y-2">
              <a
                href="https://wa.me/41766830515"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="https://www.instagram.com/aquariseshop?igsh=MXhiaDFpN3dnbnUwdg=="
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
