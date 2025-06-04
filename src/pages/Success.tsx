
import { CheckCircle, Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Success = () => {
  const openEdital = () => {
    window.open('https://seletivoguamare.ibrapp.com/wp-content/uploads/2025/06/EDITAL-No-001-2025.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img src="/lovable-uploads/21388b99-ee46-44c3-bcb3-aa995e2d4c9a.png" alt="IBRAPP Logo" className="h-16 w-auto mx-auto mb-6" />
        </div>

        {/* Success Icon */}
        <div className="mb-8 animate-fade-in delay-200">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-300" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Inscrição Realizada!
          </h1>
          <p className="text-xl text-teal-100">
            Sua inscrição foi enviada com sucesso.
          </p>
        </div>

        {/* Success Message */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 animate-fade-in delay-400">
          <h2 className="text-2xl font-bold mb-4 text-emerald-300">
            Próximos Passos
          </h2>
          <div className="text-left space-y-4">
            <p className="text-teal-100 leading-relaxed">
              ✓ Sua inscrição foi registrada em nosso sistema
            </p>
            <p className="text-teal-100 leading-relaxed">
              ✓ Você receberá um e-mail de confirmação em breve
            </p>
            <p className="text-teal-100 leading-relaxed">
              ✓ Acompanhe o cronograma do processo seletivo no edital
            </p>
            <p className="text-teal-100 leading-relaxed">
              ✓ Prepare-se para as próximas etapas do processo
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-500/20 border border-amber-400/30 rounded-2xl p-6 mb-8 animate-fade-in delay-600">
          <p className="text-amber-100 font-medium">
            <strong>Importante:</strong> Mantenha seus dados atualizados e fique atento às comunicações oficiais. 
            Leia atentamente o edital para conhecer todas as etapas do processo seletivo.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-800">
          <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={openEdital}
            className="border-2 border-white/80 bg-white/15 backdrop-blur-sm hover:bg-white/25 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 text-white hover:text-white hover:border-white"
          >
            <FileText className="w-5 h-5 mr-2" />
            Baixar Edital
          </Button>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/20 animate-fade-in delay-1000">
          <p className="text-teal-200 text-sm">
            Dúvidas? Entre em contato com o IBRAPP
          </p>
          <p className="text-teal-100 text-sm mt-2">
            Guamaré/RN - Processo Seletivo 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
