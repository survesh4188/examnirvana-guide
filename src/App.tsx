import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MockTestPage from "./pages/MockTestPage";
import AnalysisPage from "./pages/AnalysisPage";
import SyllabusPage from "./pages/SyllabusPage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import YouTubeLinksPage from "./pages/YouTubeLinksPage";
import PreviousPapersPage from "./pages/PreviousPapersPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mock-test" element={<MockTestPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/study-materials" element={<StudyMaterialsPage />} />
          <Route path="/youtube-links" element={<YouTubeLinksPage />} />
          <Route path="/previous-papers" element={<PreviousPapersPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
