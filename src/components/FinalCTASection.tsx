import { AlertTriangle, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const openEdital = () => {
    window.open('https://seletivoguamare.ibrapp.com/wp-content/uploads/2025/06/EDITAL-No-001-2025.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Fique Atento!
            </h2>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 mb-12 animate-fade-in delay-200">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              É fundamental ler atentamente o edital completo antes de se inscrever. Ele contém todas as informações 
              detalhadas sobre requisitos, cronograma, documentação necessária e procedimentos do processo seletivo.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-red-800 font-medium">
                  O não cumprimento de qualquer requisito ou prazo estabelecido no edital resultará na eliminação
                  automática do candidato.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in delay-400">
            <Button 
              size="lg" 
              onClick={openEdital}
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-12 py-4 rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FileDown className="w-6 h-6 mr-3" />
              Baixar Edital Oficial Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
