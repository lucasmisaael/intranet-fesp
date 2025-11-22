import ModuleTemplate from "./ModuleTemplate";
import { TrendingUp, Briefcase, FileText, Users } from "lucide-react";

export default function EmpregabilidadePage() {
  return (
    <ModuleTemplate
      title="Módulo Empregabilidade"
      description="Acesso a informações sobre estágios, convênios e divulgação de vagas"
      features={[
        {
          title: "Vagas de Estágio",
          description: "Links para oportunidades de estágio disponíveis",
          icon: Briefcase,
        },
        {
          title: "Vagas de Emprego",
          description: "Divulgação de oportunidades de trabalho",
          icon: TrendingUp,
        },
        {
          title: "Convênios",
          description: "Informações sobre empresas e instituições parceiras",
          icon: Users,
        },
        {
          title: "Documentação",
          description: "Acesso a documentos necessários para estágio e TCE",
          icon: FileText,
        },
      ]}
    />
  );
}
