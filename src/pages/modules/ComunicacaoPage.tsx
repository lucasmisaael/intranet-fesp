import ModuleTemplate from "./ModuleTemplate";
import { Newspaper, Calendar, Bell, Printer } from "lucide-react";

export default function ComunicacaoPage() {
  return (
    <ModuleTemplate
      title="Módulo Comunicação e Mídia"
      description="Notícias, eventos e serviços de comunicação"
      features={[
        {
          title: "Notícias Institucionais",
          description: "Acompanhe as últimas notícias da instituição",
          icon: Newspaper,
        },
        {
          title: "Eventos",
          description: "Calendário de eventos e atividades institucionais",
          icon: Calendar,
        },
        {
          title: "Comunicados",
          description: "Avisos importantes e comunicados oficiais",
          icon: Bell,
        },
        {
          title: "Serviços Gráficos",
          description: "Solicite serviços de impressão e design",
          icon: Printer,
        },
      ]}
    />
  );
}
