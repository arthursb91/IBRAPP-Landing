
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const JobsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const jobCategories = [
    {
      title: "Administrativo e Apoio",
      jobs: [
        "Agente Administrativo/Digitador (3)",
        "Assistente Administrativo (36)",
        "Serviços Administrativos (9)",
        "Auxiliar de Secretaria (22)",
        "Recepcionista (2)",
        "Secretário Escolar (7)",
        "Auxiliar de Recursos Humanos (3)",
        "Assistente Financeiro (4)",
        "Gerente Geral (3)",
        "Coordenador Geral (4)",
        "Coordenador de Recursos Humanos (6)"
      ]
    },
    {
      title: "Educação e Cultura",
      jobs: [
        "Assessor de Educação I e II (7)",
        "Coordenador de Cultura (1)",
        "Assistente de Cultura (1)",
        "Instrutor de Banda (1)"
      ]
    },
    {
      title: "Infraestrutura",
      jobs: [
        "Pedreiro (1)",
        "Ajudante de Pedreiro (1)",
        "Eletricista (1)",
        "Engenheiro (5)",
        "Arquiteto (3)",
        "Técnico de Edificações (1)"
      ]
    },
    {
      title: "Saúde e Assistência",
      jobs: [
        "Nutricionista (1)",
        "Psicólogo (1)",
        "Assistente Social (1)",
        "Biólogo (1)"
      ]
    },
    {
      title: "Cozinha e Limpeza",
      jobs: [
        "Cozinheiro (21)",
        "Auxiliar de Cozinha (43)",
        "Auxiliar de Serviços Gerais (89)"
      ]
    },
    {
      title: "Tecnologia e Comunicação",
      jobs: [
        "Programador de TI (1)",
        "Técnico de Teleprocessamento (1)",
        "Técnico de Segurança do Trabalho (1)",
        "Técnico de Meio Ambiente (1)",
        "Assessor de Comunicação (1)",
        "Coordenador de Inovação Tecnológica (1)"
      ]
    },
    {
      title: "Transportes e Logística",
      jobs: [
        "Motorista Cat. B (8)",
        "Motorista Cat. D (35)",
        "Monitor de Ônibus (15)",
        "Inspetor de Turno (28)",
        "Mensageiro (1)"
      ]
    },
    {
      title: "Jurídico e Contábil",
      jobs: [
        "Assessor Jurídico I e II (4)",
        "Contador (1)",
        "Fiscal (5)"
      ]
    },
    {
      title: "Outros",
      jobs: [
        "Jardineiro (2)",
        "Porteiro Diurno (8)",
        "Porteiro Noturno (66)",
        "Assistente Esportivo (1)"
      ]
    }
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
              key={category.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
              >
                <span className="text-lg font-semibold text-gray-900">{category.title}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    expandedCategory === category.title ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {expandedCategory === category.title && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.jobs.map((job, jobIndex) => (
                        <div key={jobIndex} className="text-gray-700 py-1">
                          • {job}
                        </div>
                      ))}
                    </div>
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
              <span className="font-semibold">Nota:</span> Para ver todos os detalhes das vagas, salários, requisitos
              específicos e informações completas, consulte o edital oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
