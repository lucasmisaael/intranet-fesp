import { useState } from "react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  Laptop,
  MessageSquare,
  Users,
  FlaskConical,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Acadêmico", url: "/academico", icon: GraduationCap },
  { title: "Administrativo", url: "/administrativo", icon: Building2 },
  { title: "Biblioteca", url: "/biblioteca", icon: BookOpen },
  { title: "Tecnologia", url: "/tecnologia", icon: Laptop },
  { title: "Comunicação", url: "/comunicacao", icon: MessageSquare },
  { title: "Recursos Humanos", url: "/recursos-humanos", icon: Users },
  { title: "Cursos", url: "/cursos", icon: FileText },
  { title: "Pesquisa", url: "/pesquisa", icon: FlaskConical },
  { title: "Comitê de Ética", url: "/comite-etica", icon: ShieldCheck },
  { title: "Empregabilidade", url: "/empregabilidade", icon: TrendingUp },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
