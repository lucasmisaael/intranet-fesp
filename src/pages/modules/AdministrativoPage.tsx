import ModuleTemplate from "./ModuleTemplate";
import { DollarSign, Package, FileText, ClipboardList } from "lucide-react";

export default function AdministrativoPage() {
  return (
    <ModuleTemplate
      title="Módulo Administrativo"
      description="Direcionamentos para processos administrativos e financeiros da instituição"
      features={[
        {
          title: "Processos Financeiros",
          description: "Links para gestão de pagamentos, orçamentos e prestação de contas",
          icon: DollarSign,
        },
        {
          title: "Patrimônio e Manutenção",
          description: "Acesso ao controle de patrimônio e solicitações de manutenção",
          icon: Package,
        },
        {
          title: "Documentos Administrativos",
          description: "Direcionamento para documentos e formulários administrativos",
          icon: FileText,
        },
        {
          title: "Solicitações Internas",
          description: "Links para solicitações de serviços administrativos",
          icon: ClipboardList,
        },
      ]}
    />
  );
}
