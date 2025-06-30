
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [studentForm, setStudentForm] = useState({ email: "", password: "" });
  const [instructorForm, setInstructorForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleStudentLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!studentForm.email || !studentForm.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome Back!",
      description: "You have successfully logged in as a student.",
    });
    
    // Simulate login and redirect to student dashboard
    navigate("/student-dashboard");
  };

  const handleInstructorLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!instructorForm.email || !instructorForm.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Welcome Back!",
      description: "You have successfully logged in as an instructor.",
    });
    
    // Simulate login and redirect to instructor dashboard
    navigate("/instructor-dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to continue your learning journey
          </p>
        </div>

        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle>Student Login</CardTitle>
                <CardDescription>
                  Access your courses and continue learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="Enter your email"
                      value={studentForm.email}
                      onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      value={studentForm.password}
                      onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember" 
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Sign In as Student
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>Instructor Login</CardTitle>
                <CardDescription>
                  Access your instructor dashboard and manage courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInstructorLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input
                      id="instructor-email"
                      type="email"
                      placeholder="Enter your email"
                      value={instructorForm.email}
                      onChange={(e) => setInstructorForm({...instructorForm, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="instructor-password">Password</Label>
                    <Input
                      id="instructor-password"
                      type="password"
                      placeholder="Enter your password"
                      value={instructorForm.password}
                      onChange={(e) => setInstructorForm({...instructorForm, password: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="instructor-remember" 
                        checked={rememberMe}
                        onCheckedChange={setRememberMe}
                      />
                      <Label htmlFor="instructor-remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Sign In as Instructor
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
