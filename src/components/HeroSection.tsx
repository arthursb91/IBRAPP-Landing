import { Button } from "@/components/ui/button";
import { Clock, FileDown, UserPlus } from "lucide-react";
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
  return <section className="min-h-screen bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container pt-20 pb-32 relative z-10 mx-0 my-0 px-[24px] py-0">
        <div className="flex items-center min-h-[80vh]">
          {/* Left Content - 65% */}
          <div className="w-[65%] text-left animate-fade-in">
            {/* Logo */}
            <div className="mb-6 animate-fade-in">
              <img src="/lovable-uploads/21388b99-ee46-44c3-bcb3-aa995e2d4c9a.png" alt="IBRAPP Logo" className="h-16 w-auto" />
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
              <p className="text-lg md:text-xl text-teal-50 max-w-2xl leading-relaxed">
                Sua oportunidade de fazer parte de uma equipe dedicada
                ao desenvolvimento e transformação de Guamaré.
                <br />
                <span className="font-semibold">Venha construir o futuro conosco!</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-600">
              <Button size="lg" onClick={scrollToForm} className="bg-gradient-to-r from-white to-gray-100 text-teal-700 hover:from-gray-100 hover:to-gray-200 font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                <UserPlus className="w-6 h-6 mr-3" />
                Inscreva-se Agora
                <span className="ml-2 text-2xl">→</span>
              </Button>
              <Button size="lg" variant="outline" onClick={openEdital} className="border-3 border-white/60 bg-white/10 backdrop-blur-sm hover:bg-white/20 font-bold px-10 py-6 rounded-2xl text-lg transition-all duration-300 hover:scale-105 text-white hover:text-white hover:shadow-2xl hover:border-white">
                <FileDown className="w-6 h-6 mr-3" />
                Baixar Edital
              </Button>
            </div>
          </div>

          {/* Right Image - 35% */}
          <div className="w-[35%] flex justify-end items-end animate-fade-in delay-800 h-full">
            <div className="relative h-full flex items-end">
              <img alt="Pessoa feliz sendo contratada" className="max-w-full h-auto max-h-[100vh] object-contain" src="/lovable-uploads/7f3b01a0-cd19-4274-9bc5-11b9dd1fd82e.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;