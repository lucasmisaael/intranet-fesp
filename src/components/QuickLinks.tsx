import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const quickLinks = [
  { title: "Portal do Aluno", url: "#" },
  { title: "Sistema Acadêmico", url: "#" },
  { title: "Webmail Institucional", url: "#" },
  { title: "Biblioteca Virtual", url: "#" },
  { title: "Chamados TI", url: "#" },
  { title: "Portal do Professor", url: "#" },
];

export function QuickLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Links Rápidos</CardTitle>
        <CardDescription>Acesso direto aos principais sistemas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {quickLinks.map((link) => (
            <Button
              key={link.title}
              variant="outline"
              className="justify-between"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
