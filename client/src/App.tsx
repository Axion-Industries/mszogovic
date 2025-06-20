import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Class from "@/pages/class";
import Algebra2 from "@/pages/algebra2";
import Statistics from "@/pages/statistics";
import Calculator from "@/pages/calculator";
import Resources from "@/pages/resources";
import Algebra2Resources from "@/pages/algebra2-resources";
import StatisticsResources from "@/pages/statistics-resources";
import Algebra2News from "@/pages/algebra2-news";
import Algebra2Assignments from "@/pages/algebra2-assignments";
import StatisticsNews from "@/pages/statistics-news";
import StatisticsAssignments from "@/pages/statistics-assignments";
import Help from "@/pages/help";
import Settings from "@/pages/settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/class" component={Class} />
      <Route path="/algebra2" component={Algebra2} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/resources" component={Resources} />
      <Route path="/algebra2-resources" component={Algebra2Resources} />
      <Route path="/statistics-resources" component={StatisticsResources} />
      <Route path="/algebra2-news" component={Algebra2News} />
      <Route path="/algebra2-assignments" component={Algebra2Assignments} />
      <Route path="/statistics-news" component={StatisticsNews} />
      <Route path="/statistics-assignments" component={StatisticsAssignments} />
      <Route path="/help" component={Help} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-edu-bg">
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
