
import { Button } from "@/components/ui/button";
import { Clock, FileDown, UserPlus, User, Calendar, MapPin, Phone, Mail, Star } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('inscricao-form');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const openEdital = () => {
    window.open('https://seletivoguamare.ibrapp.com/wp-content/uploads/2024/01/IBRAPP_MARCA-02.png', '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container pt-20 pb-32 relative z-10 mx-auto px-6">
        <div className="flex items-center min-h-[80vh] gap-8">
          {/* Left Content - 65% */}
          <div className="w-[65%] flex flex-col items-center text-center animate-fade-in">
            {/* Logo */}
            <div className="mb-6 animate-fade-in">
              <img src="/lovable-uploads/21388b99-ee46-44c3-bcb3-aa995e2d4c9a.png" alt="IBRAPP Logo" className="h-16 w-auto mx-auto" />
            </div>

            {/* Status Badge */}
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Inscrições Abertas
              </div>
            </div>

            {/* Main Content */}
            <div className="animate-fade-in delay-200">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Processo Seletivo
                <br />
                <span className="text-teal-200">IBRAPP 2025</span>
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-4">Guamaré/RN</p>
            </div>

            <div className="animate-fade-in delay-400 mb-12">
              <p className="text-lg md:text-xl text-teal-50 max-w-2xl leading-relaxed mx-auto">
                Sua oportunidade de fazer parte de uma equipe dedicada
                ao desenvolvimento e transformação de Guamaré.
                <br />
                <span className="font-semibold">Venha construir o futuro conosco!</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-600 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToForm} 
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 shadow-lg"
              >
                <UserPlus className="w-6 h-6 mr-3" />
                Inscreva-se Agora
                <span className="ml-2 text-2xl">→</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={openEdital} 
                className="border-2 border-white/80 bg-white/15 backdrop-blur-sm hover:bg-white/25 font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 text-white hover:text-white hover:shadow-2xl hover:border-white shadow-lg"
              >
                <FileDown className="w-6 h-6 mr-3" />
                Baixar Edital
              </Button>
            </div>
          </div>

          {/* Right Content - 35% - Candidate Evaluation Screen */}
          <div className="w-[35%] flex justify-center items-center animate-fade-in delay-800">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md">
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 rounded-2xl mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Maria Silva Santos</h3>
                    <p className="text-sm text-teal-100">Assistente Administrativo</p>
                  </div>
                </div>
              </div>

              {/* Candidate Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">28 anos • 5 anos de experiência</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">Guamaré, RN</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-4 h-4 text-teal-600" />
                  <span className="text-sm">maria.santos@email.com</span>
                </div>
              </div>

              {/* Skills Assessment */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Avaliação de Competências</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Comunicação</span>
                      <span className="text-emerald-600 font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Organização</span>
                      <span className="text-blue-600 font-medium">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Excel/Word</span>
                      <span className="text-purple-600 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overall Status */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800">Status da Avaliação</span>
                </div>
                <p className="text-emerald-700 font-medium">Candidato Aprovado</p>
                <p className="text-sm text-emerald-600 mt-1">Perfil adequado para a vaga</p>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-xl font-medium hover:from-teal-700 hover:to-teal-800 transition-all duration-300">
                Ver Perfil Completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
