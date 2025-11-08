import ModuleTemplate from "./ModuleTemplate";
import { Laptop, HeadphonesIcon, Calendar, Wifi } from "lucide-react";

export default function TecnologiaPage() {
  return (
    <ModuleTemplate
      title="Módulo Tecnologia"
      description="Suporte técnico e serviços de TI"
      features={[
        {
          title: "Chamados Técnicos",
          description: "Abra e acompanhe chamados de suporte técnico",
          icon: HeadphonesIcon,
        },
        {
          title: "Agendamento de Laboratórios",
          description: "Reserve laboratórios de informática",
          icon: Calendar,
        },
        {
          title: "Acesso à Rede",
          description: "Configurações e suporte para acesso à rede institucional",
          icon: Wifi,
        },
        {
          title: "Empréstimo de Equipamentos",
          description: "Solicite empréstimo de equipamentos tecnológicos",
          icon: Laptop,
        },
      ]}
    />
  );
}
