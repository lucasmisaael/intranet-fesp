import ModuleTemplate from "./ModuleTemplate";
import { FlaskConical, Users, FileText, Network } from "lucide-react";

export default function PesquisaPage() {
  return (
    <ModuleTemplate
      title="Módulo Pesquisa"
      description="Grupos de pesquisa, editais e projetos científicos"
      features={[
        {
          title: "Grupos de Pesquisa",
          description: "Conheça os grupos de pesquisa da instituição",
          icon: Users,
        },
        {
          title: "Editais",
          description: "Editais de fomento e financiamento à pesquisa",
          icon: FileText,
        },
        {
          title: "Projetos Científicos",
          description: "Acompanhe projetos de pesquisa em andamento",
          icon: FlaskConical,
        },
        {
          title: "Redes de Aprendizagem",
          description: "Colaboração e networking entre pesquisadores",
          icon: Network,
        },
      ]}
    />
  );
}
