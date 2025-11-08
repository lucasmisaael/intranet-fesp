import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ClipboardList, BookOpen } from "lucide-react";

const features = [
  {
    title: "Calendário Acadêmico",
    description: "Acesse o calendário letivo completo com todas as datas importantes",
    icon: Calendar,
  },
  {
    title: "Regulamentos",
    description: "Consulte regulamentos e normas acadêmicas vigentes",
    icon: FileText,
  },
  {
    title: "Solicitações",
    description: "Faça solicitações acadêmicas online de forma rápida e simples",
    icon: ClipboardList,
  },
  {
    title: "Pautas Eletrônicas",
    description: "Visualize e gerencie pautas de aulas e reuniões",
    icon: BookOpen,
  },
];

export default function AcademicoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Módulo Acadêmico</h1>
        <p className="text-muted-foreground">
          Gerencie todas as atividades e processos acadêmicos da instituição
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title} className="hover:shadow-elevated transition-shadow">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Acessar</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
