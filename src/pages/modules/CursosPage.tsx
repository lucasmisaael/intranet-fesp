import ModuleTemplate from "./ModuleTemplate";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

export default function CursosPage() {
  return (
    <ModuleTemplate
      title="Módulo Cursos"
      description="Informações sobre graduação, pós-graduação e extensão"
      features={[
        {
          title: "Graduação",
          description: "Informações sobre cursos de graduação",
          icon: GraduationCap,
        },
        {
          title: "Pós-Graduação",
          description: "Programas de mestrado, doutorado e especialização",
          icon: Award,
        },
        {
          title: "Extensão",
          description: "Cursos de extensão e atualização profissional",
          icon: BookOpen,
        },
        {
          title: "Corpo Docente",
          description: "Informações sobre professores e coordenadores",
          icon: Users,
        },
      ]}
    />
  );
}
