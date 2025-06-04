
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <p className="text-gray-400">
              © 2025 IBRAPP - Instituto Brasileiro de Administração Pública. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex space-x-8 animate-fade-in delay-200">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
            >
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
