import ModuleTemplate from "./ModuleTemplate";
import { Users, Briefcase, FileText, Gift } from "lucide-react";

export default function RecursosHumanosPage() {
  return (
    <ModuleTemplate
      title="Módulo Recursos Humanos"
      description="Gestão de pessoas e benefícios"
      features={[
        {
          title: "Portal do Colaborador",
          description: "Acesse informações pessoais e documentos",
          icon: Users,
        },
        {
          title: "Processos Seletivos",
          description: "Vagas abertas e acompanhamento de processos",
          icon: Briefcase,
        },
        {
          title: "Benefícios",
          description: "Consulte e gerencie seus benefícios",
          icon: Gift,
        },
        {
          title: "Documentos RH",
          description: "Solicite declarações e documentos de RH",
          icon: FileText,
        },
      ]}
    />
  );
}
