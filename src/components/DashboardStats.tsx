import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, FileText, Users, Bell } from "lucide-react";

const stats = [
  {
    title: "Eventos esta semana",
    value: "5",
    icon: Calendar,
    description: "Próximos 7 dias",
  },
  {
    title: "Comunicados novos",
    value: "12",
    icon: Bell,
    description: "Não lidos",
  },
  {
    title: "Documentos recentes",
    value: "28",
    icon: FileText,
    description: "Últimos 30 dias",
  },
  {
    title: "Usuários online",
    value: "143",
    icon: Users,
    description: "Agora",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
