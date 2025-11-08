import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color?: string;
}

export function ModuleCard({ title, description, icon: Icon, link, color = "primary" }: ModuleCardProps) {
  return (
    <Card className="group hover:shadow-elevated transition-all duration-300 border-border h-full flex flex-col">
      <CardHeader>
        <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${color}/10`}>
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button asChild variant="ghost" className="w-full group-hover:bg-secondary">
          <Link to={link} className="flex items-center justify-between">
            Acessar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
