import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Files from "./pages/Files";
import Projects from "./pages/Projects";
import Templates from "./pages/Templates";
import Settings from "./pages/Settings";
import SetupInformation from "./pages/SetupInformation";
import Subscription from "./pages/Subscription";
import Administrator from "./pages/Administrator";
import Users from "./pages/Users";
import Permissions from "./pages/Permissions";
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
          <Route path="/files" element={<Files />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/setup" element={<SetupInformation />} />
          <Route path="/settings/subscription" element={<Subscription />} />
          <Route path="/settings/administrator" element={<Administrator />} />
          <Route path="/users" element={<Users />} />
          <Route path="/permissions" element={<Permissions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
