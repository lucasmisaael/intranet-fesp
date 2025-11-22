import ModuleTemplate from "./ModuleTemplate";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

export default function CursosPage() {
  return (
    <ModuleTemplate
      title="Módulo Cursos"
      description="Acesso às páginas e sistemas relacionados aos cursos"
      features={[
        {
          title: "Graduação",
          description: "Links para páginas e sistemas dos cursos de graduação",
          icon: GraduationCap,
        },
        {
          title: "Pós-Graduação",
          description: "Acesso aos programas de mestrado, doutorado e especialização",
          icon: Award,
        },
        {
          title: "Extensão",
          description: "Direcionamento para cursos de extensão e atualização profissional",
          icon: BookOpen,
        },
        {
          title: "Corpo Docente",
          description: "Links para informações sobre professores e coordenadores",
          icon: Users,
        },
      ]}
    />
  );
}
