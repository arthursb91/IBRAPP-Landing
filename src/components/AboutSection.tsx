
import { GraduationCap, Users, Briefcase, Shield } from "lucide-react";

const AboutSection = () => {
  const levels = [
    {
      icon: GraduationCap,
      title: "Nível Fundamental",
      description: "Oportunidades para profissionais com ensino fundamental completo em diversas áreas de atuação."
    },
    {
      icon: Users,
      title: "Nível Médio", 
      description: "Vagas para profissionais com ensino médio completo em funções técnicas e administrativas."
    },
    {
      icon: Briefcase,
      title: "Nível Superior",
      description: "Posições estratégicas para profissionais com formação superior em diversas especialidades."
    },
    {
      icon: Shield,
      title: "Regime CLT",
      description: "Contratação com carteira assinada e todos os direitos trabalhistas garantidos por lei."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venha Transformar o Futuro Conosco
            <br />
            <span className="text-teal-600">em Guamaré/RN</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O IBRAPP está com inscrições abertas para a contratação de profissionais dedicados
            e talentosos de níveis fundamental, médio e superior. As vagas são para atuação em
            Guamaré/RN, sob regime CLT, seguindo as diretrizes do nosso regulamento interno
            e as condições detalhadas no edital oficial. Esta é a sua chance de integrar uma
            organização comprometida com o desenvolvimento e a excelência!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {levels.map((level, index) => (
            <div 
              key={level.title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in border border-gray-100 hover:border-teal-200"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300">
                  <level.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {level.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
