import ModuleTemplate from "./ModuleTemplate";
import { TrendingUp, Briefcase, FileText, Users } from "lucide-react";

export default function EmpregabilidadePage() {
  return (
    <ModuleTemplate
      title="Módulo Empregabilidade"
      description="Estágios, convênios e oportunidades de carreira"
      features={[
        {
          title: "Vagas de Estágio",
          description: "Confira oportunidades de estágio disponíveis",
          icon: Briefcase,
        },
        {
          title: "Vagas de Emprego",
          description: "Oportunidades de trabalho para egressos",
          icon: TrendingUp,
        },
        {
          title: "Convênios",
          description: "Empresas e instituições parceiras",
          icon: Users,
        },
        {
          title: "Documentação",
          description: "Documentos necessários para estágio e TCE",
          icon: FileText,
        },
      ]}
    />
  );
}
