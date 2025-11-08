import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import AcademicoPage from "./pages/modules/AcademicoPage";
import AdministrativoPage from "./pages/modules/AdministrativoPage";
import BibliotecaPage from "./pages/modules/BibliotecaPage";
import TecnologiaPage from "./pages/modules/TecnologiaPage";
import ComunicacaoPage from "./pages/modules/ComunicacaoPage";
import RecursosHumanosPage from "./pages/modules/RecursosHumanosPage";
import CursosPage from "./pages/modules/CursosPage";
import PesquisaPage from "./pages/modules/PesquisaPage";
import ComiteEticaPage from "./pages/modules/ComiteEticaPage";
import EmpregabilidadePage from "./pages/modules/EmpregabilidadePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="academico" element={<AcademicoPage />} />
            <Route path="administrativo" element={<AdministrativoPage />} />
            <Route path="biblioteca" element={<BibliotecaPage />} />
            <Route path="tecnologia" element={<TecnologiaPage />} />
            <Route path="comunicacao" element={<ComunicacaoPage />} />
            <Route path="recursos-humanos" element={<RecursosHumanosPage />} />
            <Route path="cursos" element={<CursosPage />} />
            <Route path="pesquisa" element={<PesquisaPage />} />
            <Route path="comite-etica" element={<ComiteEticaPage />} />
            <Route path="empregabilidade" element={<EmpregabilidadePage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
