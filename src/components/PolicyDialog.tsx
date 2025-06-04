
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PolicyDialogProps {
  children: React.ReactNode;
  title: string;
  type: 'privacy' | 'cookies';
}

const PolicyDialog = ({ children, title, type }: PolicyDialogProps) => {
  const getContent = () => {
    if (type === 'privacy') {
      return (
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            <strong>Coleta de Informações:</strong> Coletamos apenas as informações necessárias para o processo seletivo, incluindo dados pessoais, profissionais e de contato fornecidos voluntariamente pelos candidatos.
          </p>
          <p>
            <strong>Uso das Informações:</strong> Os dados são utilizados exclusivamente para avaliação dos candidatos, comunicação sobre o processo seletivo e cumprimento de obrigações legais.
          </p>
          <p>
            <strong>Proteção de Dados:</strong> Implementamos medidas de segurança adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
          <p>
            <strong>Compartilhamento:</strong> Seus dados não são compartilhados com terceiros, exceto quando necessário para o processo seletivo ou exigido por lei.
          </p>
          <p>
            <strong>Retenção:</strong> Os dados são mantidos pelo período necessário ao processo seletivo e conforme determinado pela legislação aplicável.
          </p>
        </div>
      );
    } else {
      return (
        <div className="space-y-4 text-sm text-gray-600">
          <p>
            <strong>O que são Cookies:</strong> Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site.
          </p>
          <p>
            <strong>Tipos de Cookies Utilizados:</strong>
            <br />• Cookies essenciais: Necessários para o funcionamento básico do site
            <br />• Cookies de desempenho: Para analisar como você usa o site
            <br />• Cookies funcionais: Para lembrar suas preferências
          </p>
          <p>
            <strong>Finalidade:</strong> Utilizamos cookies para melhorar sua experiência de navegação, lembrar suas preferências e analisar o uso do site.
          </p>
          <p>
            <strong>Controle de Cookies:</strong> Você pode controlar e/ou excluir cookies através das configurações do seu navegador.
          </p>
          <p>
            <strong>Cookies de Terceiros:</strong> Podemos utilizar serviços de terceiros que também podem definir cookies em seu dispositivo.
          </p>
        </div>
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            {title}
          </DialogTitle>
          <DialogDescription asChild>
            <div className="mt-4">
              {getContent()}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
