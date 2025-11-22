import ModuleTemplate from "./ModuleTemplate";
import { BookOpen, Search, Clock, FileText } from "lucide-react";

export default function BibliotecaPage() {
  return (
    <ModuleTemplate
      title="Módulo Biblioteca"
      description="Acesso aos serviços internos e acervo digital da biblioteca"
      features={[
        {
          title: "Acervo Digital",
          description: "Links para acesso ao acervo digital, livros e periódicos",
          icon: BookOpen,
        },
        {
          title: "Serviços Internos",
          description: "Acesso aos serviços de consulta e reserva de materiais",
          icon: Search,
        },
        {
          title: "Informações de Atendimento",
          description: "Horários, contatos e orientações de uso da biblioteca",
          icon: Clock,
        },
        {
          title: "Reservas",
          description: "Sistema de reservas e renovação de empréstimos",
          icon: FileText,
        },
      ]}
    />
  );
}
