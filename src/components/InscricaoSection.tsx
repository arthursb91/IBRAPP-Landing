
import { useEffect, useRef, useState } from "react";

const InscricaoSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(800);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize') {
        setIframeHeight(event.data.height + 50);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id="inscricao-form" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Faça sua Inscrição
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo para se inscrever no processo seletivo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in delay-200">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <iframe
              ref={iframeRef}
              src="https://seletivoguamare.ibrapp.com/?page_id=415"
              width="100%"
              height={iframeHeight}
              style={{ 
                border: 'none',
                overflow: 'hidden'
              }}
              title="Formulário de Inscrição"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InscricaoSection;
