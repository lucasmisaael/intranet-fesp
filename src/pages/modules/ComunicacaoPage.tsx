import ModuleTemplate from "./ModuleTemplate";
import { Newspaper, Calendar, Bell, Printer } from "lucide-react";

export default function ComunicacaoPage() {
  return (
    <ModuleTemplate
      title="Módulo Comunicação e Mídia"
      description="Direcionamento para notícias, eventos e serviços de comunicação"
      features={[
        {
          title: "Notícias Institucionais",
          description: "Acesso às últimas notícias e publicações institucionais",
          icon: Newspaper,
        },
        {
          title: "Eventos",
          description: "Links para calendário de eventos e atividades",
          icon: Calendar,
        },
        {
          title: "Alertas e Comunicados",
          description: "Avisos importantes e comunicados oficiais",
          icon: Bell,
        },
        {
          title: "Serviços Gráficos",
          description: "Solicitações de serviços de impressão e design",
          icon: Printer,
        },
      ]}
    />
  );
}
