import { ModuleCard } from "@/components/ModuleCard";
import { DashboardStats } from "@/components/DashboardStats";
import { RecentAnnouncements } from "@/components/RecentAnnouncements";
import { QuickLinks } from "@/components/QuickLinks";
import {
  BookOpen,
  Briefcase,
  Building2,
  FileText,
  GraduationCap,
  Laptop,
  MessageSquare,
  Users,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const modules = [
  {
    title: "Acadêmico",
    description: "Calendários, pautas, regulamentos e solicitações acadêmicas",
    icon: GraduationCap,
    link: "/academico",
  },
  {
    title: "Administrativo",
    description: "Processos financeiros, patrimônio e documentos administrativos",
    icon: Building2,
    link: "/administrativo",
  },
  {
    title: "Biblioteca",
    description: "Acervo digital, reservas e serviços de biblioteca",
    icon: BookOpen,
    link: "/biblioteca",
  },
  {
    title: "Tecnologia",
    description: "Chamados técnicos, laboratórios e suporte à rede",
    icon: Laptop,
    link: "/tecnologia",
  },
  {
    title: "Comunicação",
    description: "Notícias, eventos, alertas e serviços gráficos",
    icon: MessageSquare,
    link: "/comunicacao",
  },
  {
    title: "Recursos Humanos",
    description: "Processos seletivos, benefícios e portal do colaborador",
    icon: Users,
    link: "/recursos-humanos",
  },
  {
    title: "Cursos",
    description: "Graduação, pós-graduação e extensão",
    icon: FileText,
    link: "/cursos",
  },
  {
    title: "Pesquisa",
    description: "Grupos de pesquisa, editais e redes de aprendizagem",
    icon: FlaskConical,
    link: "/pesquisa",
  },
  {
    title: "Comitê de Ética",
    description: "Procedimentos, formulários e prazos",
    icon: ShieldCheck,
    link: "/comite-etica",
  },
  {
    title: "Empregabilidade",
    description: "Estágios, convênios e divulgação de vagas",
    icon: TrendingUp,
    link: "/empregabilidade",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="relative h-48 w-full overflow-hidden rounded-lg">
        <img 
          src={heroBanner} 
          alt="FESP PR Campus" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 flex items-center">
          <div className="px-8 text-primary-foreground">
            <h1 className="text-3xl font-bold mb-2">Bem-vindo à Intranet FESP PR</h1>
            <p className="text-lg opacity-90">Acesse todas as informações e serviços institucionais em um só lugar</p>
          </div>
        </div>
      </div>

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Módulos Institucionais</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {modules.map((module) => (
                <ModuleCard key={module.title} {...module} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <RecentAnnouncements />
          <QuickLinks />
        </div>
      </div>
    </div>
  );
}
