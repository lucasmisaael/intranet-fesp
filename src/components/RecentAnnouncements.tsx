import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const announcements = [
  {
    id: 1,
    title: "Nova plataforma de e-learning disponível",
    category: "Acadêmico",
    date: "08/11/2025",
    priority: "high",
  },
  {
    id: 2,
    title: "Manutenção programada nos servidores",
    category: "TI",
    date: "07/11/2025",
    priority: "medium",
  },
  {
    id: 3,
    title: "Inscrições abertas para cursos de extensão",
    category: "Cursos",
    date: "06/11/2025",
    priority: "normal",
  },
  {
    id: 4,
    title: "Novo processo de solicitação de documentos",
    category: "Administrativo",
    date: "05/11/2025",
    priority: "normal",
  },
  {
    id: 5,
    title: "Semana de integração - inscrições abertas",
    category: "Comunicação",
    date: "04/11/2025",
    priority: "high",
  },
];

const priorityColors = {
  high: "destructive",
  medium: "accent",
  normal: "secondary",
};

export function RecentAnnouncements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comunicados Recentes</CardTitle>
        <CardDescription>Últimas atualizações e avisos importantes</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] pr-4">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="flex items-start space-x-4 rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{announcement.title}</p>
                  <div className="flex items-center gap-2 pt-1">
                    <Badge variant={priorityColors[announcement.priority] as any} className="text-xs">
                      {announcement.category}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{announcement.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
