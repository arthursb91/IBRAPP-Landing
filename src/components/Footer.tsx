import PolicyDialog from "./PolicyDialog";
const Footer = () => {
  return <footer className="text-white py-12 bg-teal-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <p className="text-slate-50">© 2025 IBRAPP - Todos os direitos reservados.</p>
          </div>
          
          <div className="flex space-x-8 animate-fade-in delay-200">
            <PolicyDialog title="Política de Privacidade" type="privacy">
              <button className="transition-colors duration-200 hover:underline text-stone-50">
                Política de Privacidade
              </button>
            </PolicyDialog>
            
            <PolicyDialog title="Política de Cookies" type="cookies">
              <button className="transition-colors duration-200 hover:underline text-white">
                Política de Cookies
              </button>
            </PolicyDialog>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;