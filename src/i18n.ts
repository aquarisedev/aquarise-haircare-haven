import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { productTranslations } from "./locales/productTranslations";

const resources = {
    en: {
        translation: {
            "nav.home": "Home",
            "nav.products": "Products",
            "nav.about": "About",
            "nav.contact": "Contact",
            "header.shipping": "✨ Free shipping over CHF 50 | Delivery throughout Switzerland 🇨🇭",
            "search.placeholder": "Search products...",
            "products.featured": "Featured Products",
            "products.subtitle": "Discover our premium selection of HASKELL, LOLA and EUDORA products",
            "products.viewAll": "View all products",
            "products.brand": "Brand",
            "products.collection": "Collection",
            "hero.title": "Premium Care for your",
            "hero.title_highlight": "Hair",
            "hero.subtitle": "Discover the complete HASKELL and LOLA line with the best prices in Switzerland",
            "hero.cta_new": "See New Arrivals",
            "hero.cta_promo": "Products on Sale",
            "hero.image_alt": "Healthy and shiny hair",
            ...productTranslations.en.translation,
        },
    },
    "fr-CH": {
        translation: {
            "nav.home": "Accueil",
            "nav.products": "Produits",
            "nav.about": "À propos",
            "nav.contact": "Contact",
            "header.shipping": "✨ Livraison gratuite dès CHF 50 | Livraison dans toute la Suisse 🇨🇭",
            "search.placeholder": "Rechercher des produits...",
            "products.featured": "Produits en vedette",
            "products.subtitle": "Découvrez notre sélection premium de produits HASKELL, LOLA et EUDORA",
            "products.viewAll": "Voir tous les produits",
            "products.brand": "Marque",
            "products.collection": "Collection",
            "hero.title": "Soins Premium pour vos",
            "hero.title_highlight": "Cheveux",
            "hero.subtitle": "Découvrez la gamme complète HASKELL et LOLA aux meilleurs prix en Suisse",
            "hero.cta_new": "Voir les Nouveautés",
            "hero.cta_promo": "Produits en Promotion",
            "hero.image_alt": "Cheveux sains et brillants",
            ...productTranslations["fr-CH"].translation,
        },
    },
    "pt-PT": {
        translation: {
            "nav.home": "Início",
            "nav.products": "Produtos",
            "nav.about": "Sobre",
            "nav.contact": "Contacto",
            "header.shipping": "✨ Portes grátis acima de CHF 50 | Entrega em toda a Suíça 🇨🇭",
            "search.placeholder": "Pesquisar produtos...",
            "products.featured": "Produtos em Destaque",
            "products.subtitle": "Descubra a nossa seleção premium de produtos HASKELL, LOLA e EUDORA",
            "products.viewAll": "Ver todos os produtos",
            "products.brand": "Marca",
            "products.collection": "Coleção",
            "hero.title": "Cuidados Premium para os seus",
            "hero.title_highlight": "Cabelos",
            "hero.subtitle": "Descubra a linha completa HASKELL e LOLA com os melhores preços da Suíça",
            "hero.cta_new": "Ver Novidades",
            "hero.cta_promo": "Produtos em Promoção",
            "hero.image_alt": "Cabelos saudáveis e brilhantes",
        },
    },
    "pt-BR": {
        translation: {
            "nav.home": "Início",
            "nav.products": "Produtos",
            "nav.about": "Sobre",
            "nav.contact": "Contato",
            "header.shipping": "✨ Frete grátis acima de CHF 50 | Entrega em toda Suíça 🇨🇭",
            "search.placeholder": "Buscar produtos...",
            "products.featured": "Produtos em Destaque",
            "products.subtitle": "Descubra nossa seleção premium de produtos HASKELL, LOLA e EUDORA",
            "products.viewAll": "Ver todos os produtos",
            "products.brand": "Marca",
            "products.collection": "Coleção",
            "hero.title": "Cuidados Premium para seus",
            "hero.title_highlight": "Cabelos",
            "hero.subtitle": "Descubra a linha completa HASKELL e LOLA com os melhores preços da Suíça",
            "hero.cta_new": "Ver Novidades",
            "hero.cta_promo": "Produtos em Promoção",
            "hero.image_alt": "Cabelos saudáveis e brilhantes",
        },
    },
    es: {
        translation: {
            "nav.home": "Inicio",
            "nav.products": "Productos",
            "nav.about": "Sobre",
            "nav.contact": "Contacto",
            "header.shipping": "✨ Envío gratis a partir de CHF 50 | Entrega en toda Suiza 🇨🇭",
            "search.placeholder": "Buscar productos...",
            "products.featured": "Productos Destacados",
            "products.subtitle": "Descubra nuestra selección premium de productos HASKELL, LOLA y EUDORA",
            "products.viewAll": "Ver todos los productos",
            "products.brand": "Marca",
            "products.collection": "Colección",
            "hero.title": "Cuidados Premium para su",
            "hero.title_highlight": "Cabello",
            "hero.subtitle": "Descubra la línea completa HASKELL y LOLA con los mejores precios de Suiza",
            "hero.cta_new": "Ver Novedades",
            "hero.cta_promo": "Productos en Promoción",
            "hero.image_alt": "Cabello sano y brillante",
            ...productTranslations.es.translation,
        },
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt-BR",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
