import ModuleTemplate from "./ModuleTemplate";
import { Laptop, HeadphonesIcon, Calendar, Wifi } from "lucide-react";

export default function TecnologiaPage() {
  return (
    <ModuleTemplate
      title="Módulo Tecnologia"
      description="Links para suporte técnico e serviços de TI"
      features={[
        {
          title: "Chamados Técnicos",
          description: "Acesso ao sistema de abertura e acompanhamento de chamados",
          icon: HeadphonesIcon,
        },
        {
          title: "Agendamento de Laboratórios",
          description: "Links para reserva de laboratórios de informática",
          icon: Calendar,
        },
        {
          title: "Suporte à Rede",
          description: "Orientações e suporte para acesso à rede institucional",
          icon: Wifi,
        },
        {
          title: "Equipamentos",
          description: "Direcionamento para empréstimo de equipamentos tecnológicos",
          icon: Laptop,
        },
      ]}
    />
  );
}
