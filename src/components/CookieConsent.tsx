import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CookieConsent = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border p-4 shadow-lg animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                    {t("cookies.message", "Nós utilizamos cookies para melhorar sua experiência e lembrar suas preferências. Ao continuar navegando, você concorda com nossa política de privacidade.")}
                </p>
                <div className="flex gap-2">
                    <Button onClick={handleAccept} className="whitespace-nowrap">
                        {t("cookies.accept", "Aceitar Cookies")}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
