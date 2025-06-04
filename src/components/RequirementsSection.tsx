
import { CheckCircle, FileText, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const RequirementsSection = () => {
  const requirements = [
    {
      icon: Calendar,
      title: "Idade Mínima",
      description: "Ter 18 anos completos até a data da inscrição."
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Apresentar os documentos exigidos no momento da contratação."
    },
    {
      icon: Users,
      title: "Regimento e Código",
      description: "Ler o Regimento Interno e o Código de Ética e Conduta do IBRAPP (anexos do edital)."
    },
    {
      icon: CheckCircle,
      title: "Cumprimento do Edital",
      description: "Cumprir todas as determinações do edital."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem Pode se Inscrever?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira os requisitos básicos para participar do processo seletivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {requirements.map((req, index) => (
            <div 
              key={req.title}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                  <req.icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {req.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {req.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="max-w-4xl mx-auto animate-fade-in delay-600">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-blue-800 leading-relaxed">
              <span className="font-semibold">Importante:</span> Para informações detalhadas sobre todos os requisitos específicos de cada cargo, consulte o
              edital completo.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fade-in delay-800">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-5 h-5 mr-2" />
            Ver Requisitos Completos no Edital
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
