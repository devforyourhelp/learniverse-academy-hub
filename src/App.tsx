
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CourseListing from "./pages/CourseListing";
import CourseDetail from "./pages/CourseDetail";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import InstructorDashboard from "./pages/InstructorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
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
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/checkout/:courseId" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
