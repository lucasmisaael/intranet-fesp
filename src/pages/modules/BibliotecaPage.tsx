import ModuleTemplate from "./ModuleTemplate";
import { BookOpen, Search, Clock, FileText } from "lucide-react";

export default function BibliotecaPage() {
  return (
    <ModuleTemplate
      title="Módulo Biblioteca"
      description="Acesso ao acervo digital e serviços de biblioteca"
      features={[
        {
          title: "Acervo Digital",
          description: "Pesquise e acesse livros, periódicos e materiais digitais",
          icon: BookOpen,
        },
        {
          title: "Consulta ao Catálogo",
          description: "Busque materiais disponíveis no acervo físico",
          icon: Search,
        },
        {
          title: "Renovação de Empréstimos",
          description: "Renove seus empréstimos de forma online",
          icon: Clock,
        },
        {
          title: "Reserva de Materiais",
          description: "Reserve materiais disponíveis para retirada",
          icon: FileText,
        },
      ]}
    />
  );
}
