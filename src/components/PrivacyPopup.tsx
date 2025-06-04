
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const PrivacyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('privacy-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacy-accepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 animate-fade-in">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      
      <div className="pr-8">
        <h3 className="font-bold text-gray-900 mb-3">Política de Privacidade</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Ao continuar navegando, você concorda com nossa política de privacidade e o uso de cookies para melhorar sua experiência.
        </p>
        
        <Button 
          onClick={handleAccept}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Entendi e Aceito
        </Button>
      </div>
    </div>
  );
};

export default PrivacyPopup;
