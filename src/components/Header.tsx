import { Search, ShoppingCart, User, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-surface shadow-sm">
      {/* Top Bar */}
      <div className="gradient-primary py-2 text-center text-sm text-white">
        <p className="px-4">
          ✨ Frete grátis acima de CHF 50 | Entrega em toda Suíça 🇨🇭
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
                placeholder="Buscar produtos..."
                className="pl-10 bg-muted border-border"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <span className="hidden text-sm font-medium text-foreground sm:block">
              CHF
            </span>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Instagram className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5 text-foreground" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <div className="mt-3 lg:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="pl-10 bg-muted border-border"
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
                Home
              </a>
            </li>
            <li>
              <a
                href="#produtos"
                className="text-foreground transition-colors hover:text-primary"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="#haskell"
                className="text-foreground transition-colors hover:text-primary"
              >
                HASKELL
              </a>
            </li>
            <li>
              <a
                href="#lola"
                className="text-foreground transition-colors hover:text-primary"
              >
                LOLA
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="text-foreground transition-colors hover:text-primary"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="text-foreground transition-colors hover:text-primary"
              >
                Contato
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
                  <span className="font-medium">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">Produtos</span>
                </a>
              </li>
              <li>
                <a
                  href="#haskell"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">HASKELL</span>
                </a>
              </li>
              <li>
                <a
                  href="#lola"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">LOLA</span>
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">Sobre</span>
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
                >
                  <span className="font-medium">Contato</span>
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
