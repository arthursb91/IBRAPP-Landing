
import { Calendar, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeadlineSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Status Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            Prazo Limitado
          </div>
        </div>

        <div className="text-center mb-12 animate-fade-in delay-200">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Não Perca o Prazo!
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            As inscrições estão abertas por tempo limitado. Garante já a sua
            participação no processo seletivo e não deixe essa oportunidade passar.
          </p>
        </div>

        {/* Deadline Cards */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 animate-fade-in delay-400">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-teal-200" />
                <p className="text-sm text-teal-200 mb-2 uppercase tracking-wide">Início das Inscrições</p>
                <p className="text-3xl font-bold">04/06/2025</p>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-teal-200" />
                <p className="text-sm text-teal-200 mb-2 uppercase tracking-wide">Fim das Inscrições</p>
                <p className="text-3xl font-bold">10/06/2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in delay-600">
          <Button 
            size="lg" 
            className="bg-white text-teal-700 hover:bg-gray-100 font-semibold px-12 py-4 rounded-full text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <AlertTriangle className="w-6 h-6 mr-3" />
            Fazer Inscrição Agora →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DeadlineSection;
