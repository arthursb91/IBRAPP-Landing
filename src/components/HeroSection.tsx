
import { Button } from "@/components/ui/button";
import { Clock, FileDown, UserPlus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* Status Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            Inscrições Abertas
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Processo Seletivo
              <br />
              <span className="text-teal-200">IBRAPP 2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-4">Guamaré/RN</p>
          </div>

          <div className="animate-fade-in delay-400 mb-12">
            <p className="text-lg md:text-xl text-teal-50 max-w-2xl mx-auto leading-relaxed">
              Sua oportunidade de fazer parte de uma equipe dedicada
              ao desenvolvimento e transformação de Guamaré.
              <br />
              <span className="font-semibold">Venha construir o futuro conosco!</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-600">
            <Button 
              size="lg" 
              className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Inscreva-se Agora →
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-teal-700 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Baixar Edital
            </Button>
          </div>
        </div>

        {/* Character Illustration */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block animate-fade-in delay-800">
          <div className="relative">
            {/* Simplified character illustration */}
            <div className="w-32 h-40 bg-blue-500 rounded-t-full relative">
              <div className="w-20 h-20 bg-gray-100 rounded-full absolute top-4 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-4 h-8 bg-gray-800 absolute bottom-0 left-8"></div>
              <div className="w-4 h-8 bg-gray-800 absolute bottom-0 right-8"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-12 h-8 bg-white rounded animate-bounce"></div>
            <div className="absolute -top-8 right-0 w-16 h-6 bg-white rounded animate-bounce delay-200"></div>
            <div className="absolute top-12 -right-12 w-6 h-6 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
