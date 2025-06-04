
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const JobsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const jobCategories = [
    "Administrativo e Apoio",
    "Educação e Cultura", 
    "Infraestrutura",
    "Saúde e Assistência",
    "Cozinha e Limpeza",
    "Tecnologia e Comunicação",
    "Transportes e Logística",
    "Jurídico e Contábil",
    "Outros"
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Encontre a Vaga Ideal para Você!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diversas oportunidades em diferentes áreas de atuação.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {jobCategories.map((category, index) => (
            <div 
              key={category}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">{category}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    expandedCategory === category ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {expandedCategory === category && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t pt-4">
                    <p className="text-gray-600">
                      Detalhes das vagas disponíveis nesta categoria serão exibidos aqui. 
                      Consulte o edital oficial para informações completas sobre requisitos, 
                      salários e benefícios.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-4xl mx-auto mt-12 animate-fade-in delay-1000">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <p className="text-yellow-800 leading-relaxed">
              <span className="font-semibold">Nota:</span> Esta é uma lista resumida das principais vagas. Para ver todas as posições disponíveis, salários, requisitos
              específicos e detalhes completos, consulte o edital oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
