
import { FileText, Search, PenTool, FileCheck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Inscrição",
      description: "Realize sua inscrição online no período estabelecido"
    },
    {
      icon: Search,
      title: "Análise Curricular",
      description: "Avaliação comparativa com base nas informações fornecidas no formulário de inscrição"
    },
    {
      icon: PenTool,
      title: "Prova Técnica Objetiva",
      description: "Teste de conhecimentos específicos e gerais"
    },
    {
      icon: FileCheck,
      title: "Análise de Documentação",
      description: "Verificação da documentação comprobatória"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como Funciona Nossa Seleção?
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Processo transparente e objetivo em etapas bem definidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="text-center animate-fade-in group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full group-hover:bg-white/20 transition-all duration-300 relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-300 text-teal-800 rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-teal-200 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-teal-100 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-white/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
