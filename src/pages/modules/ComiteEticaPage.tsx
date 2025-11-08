import ModuleTemplate from "./ModuleTemplate";
import { ShieldCheck, FileText, Calendar, CheckCircle } from "lucide-react";

export default function ComiteEticaPage() {
  return (
    <ModuleTemplate
      title="Comitê de Ética em Pesquisa"
      description="Procedimentos, formulários e submissões ao comitê de ética"
      features={[
        {
          title: "Procedimentos",
          description: "Normas e procedimentos para submissão de projetos",
          icon: ShieldCheck,
        },
        {
          title: "Formulários",
          description: "Baixe e preencha formulários necessários",
          icon: FileText,
        },
        {
          title: "Prazos",
          description: "Calendário de reuniões e prazos de submissão",
          icon: Calendar,
        },
        {
          title: "Acompanhamento",
          description: "Acompanhe o status de seus projetos submetidos",
          icon: CheckCircle,
        },
      ]}
    />
  );
}
