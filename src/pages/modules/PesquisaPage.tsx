import ModuleTemplate from "./ModuleTemplate";
import { FlaskConical, Users, FileText, Network } from "lucide-react";

export default function PesquisaPage() {
  return (
    <ModuleTemplate
      title="Módulo Pesquisa"
      description="Direcionamento para grupos de pesquisa, editais e redes de aprendizagem"
      features={[
        {
          title: "Grupos de Pesquisa",
          description: "Links para os grupos de pesquisa da instituição",
          icon: Users,
        },
        {
          title: "Editais",
          description: "Acesso a editais de fomento e financiamento à pesquisa",
          icon: FileText,
        },
        {
          title: "Projetos Científicos",
          description: "Direcionamento para projetos de pesquisa em andamento",
          icon: FlaskConical,
        },
        {
          title: "Redes de Aprendizagem",
          description: "Links para redes de colaboração entre pesquisadores",
          icon: Network,
        },
      ]}
    />
  );
}
