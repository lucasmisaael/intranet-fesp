import ModuleTemplate from "./ModuleTemplate";
import { DollarSign, Package, FileText, ClipboardList } from "lucide-react";

export default function AdministrativoPage() {
  return (
    <ModuleTemplate
      title="Módulo Administrativo"
      description="Processos administrativos e financeiros da instituição"
      features={[
        {
          title: "Processos Financeiros",
          description: "Gestão de pagamentos, orçamentos e prestação de contas",
          icon: DollarSign,
        },
        {
          title: "Patrimônio",
          description: "Controle e gestão do patrimônio institucional",
          icon: Package,
        },
        {
          title: "Documentos",
          description: "Acesso a documentos administrativos e formulários",
          icon: FileText,
        },
        {
          title: "Solicitações Internas",
          description: "Faça solicitações de serviços administrativos",
          icon: ClipboardList,
        },
      ]}
    />
  );
}
