import ModuleTemplate from "./ModuleTemplate";
import { Users, Briefcase, FileText, Gift } from "lucide-react";

export default function RecursosHumanosPage() {
  return (
    <ModuleTemplate
      title="Módulo Recursos Humanos"
      description="Links para processos de RH e gestão de pessoas"
      features={[
        {
          title: "Portal do Colaborador",
          description: "Acesso ao portal com informações pessoais e documentos",
          icon: Users,
        },
        {
          title: "Processos Seletivos",
          description: "Links para vagas abertas e acompanhamento de processos",
          icon: Briefcase,
        },
        {
          title: "Benefícios",
          description: "Direcionamento para consulta e gestão de benefícios",
          icon: Gift,
        },
        {
          title: "Documentos RH",
          description: "Links para solicitação de declarações e documentos",
          icon: FileText,
        },
      ]}
    />
  );
}
