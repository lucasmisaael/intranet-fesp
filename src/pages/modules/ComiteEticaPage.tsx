import ModuleTemplate from "./ModuleTemplate";
import { ShieldCheck, FileText, Calendar, CheckCircle } from "lucide-react";

export default function ComiteEticaPage() {
  return (
    <ModuleTemplate
      title="Comitê de Ética em Pesquisa"
      description="Links para procedimentos, formulários e prazos do comitê"
      features={[
        {
          title: "Procedimentos",
          description: "Acesso às normas e procedimentos para submissão de projetos",
          icon: ShieldCheck,
        },
        {
          title: "Formulários",
          description: "Links para download de formulários necessários",
          icon: FileText,
        },
        {
          title: "Prazos",
          description: "Direcionamento para calendário de reuniões e prazos",
          icon: Calendar,
        },
        {
          title: "Acompanhamento",
          description: "Links para acompanhamento de projetos submetidos",
          icon: CheckCircle,
        },
      ]}
    />
  );
}
