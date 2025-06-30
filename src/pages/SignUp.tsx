
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Users, DollarSign, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const [instructorForm, setInstructorForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    expertise: ""
  });
  
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { toast } = useToast();

  const handleStudentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentForm.password !== studentForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Account Created!",
      description: "Welcome to LearnHub! You can now start exploring courses.",
    });
    
    // Reset form
    setStudentForm({ name: "", email: "", password: "", confirmPassword: "" });
    setAgreedToTerms(false);
  };

  const handleInstructorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (instructorForm.password !== instructorForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Instructor Account Created!",
      description: "Welcome to LearnHub! You can now start creating courses.",
    });
    
    // Reset form
    setInstructorForm({ name: "", email: "", password: "", confirmPassword: "", bio: "", expertise: "" });
    setAgreedToTerms(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join LearnHub Today
          </h1>
          <p className="text-xl text-gray-600">
            Start your learning journey or begin teaching others
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sign Up Form */}
          <div>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">I'm a Student</TabsTrigger>
                <TabsTrigger value="instructor">I'm an Instructor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="student">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Student Account</CardTitle>
                    <CardDescription>
                      Join thousands of learners and start your education journey
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleStudentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="student-name">Full Name</Label>
                        <Input
                          id="student-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={studentForm.name}
                          onChange={(e) => setStudentForm({...studentForm, name: e.target.value})}
                          required
                        />
                      </div>
                      
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
                          placeholder="Create a password"
                          value={studentForm.password}
                          onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="student-confirm-password">Confirm Password</Label>
                        <Input
                          id="student-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={studentForm.confirmPassword}
                          onChange={(e) => setStudentForm({...studentForm, confirmPassword: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="terms" 
                          checked={agreedToTerms}
                          onCheckedChange={setAgreedToTerms}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the Terms of Service and Privacy Policy
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Create Student Account
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="instructor">
                <Card>
                  <CardHeader>
                    <CardTitle>Create Instructor Account</CardTitle>
                    <CardDescription>
                      Share your knowledge and earn money teaching others
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleInstructorSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="instructor-name">Full Name</Label>
                        <Input
                          id="instructor-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={instructorForm.name}
                          onChange={(e) => setInstructorForm({...instructorForm, name: e.target.value})}
                          required
                        />
                      </div>
                      
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
                        <Label htmlFor="instructor-expertise">Area of Expertise</Label>
                        <Input
                          id="instructor-expertise"
                          type="text"
                          placeholder="e.g., Web Development, Data Science"
                          value={instructorForm.expertise}
                          onChange={(e) => setInstructorForm({...instructorForm, expertise: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instructor-password">Password</Label>
                        <Input
                          id="instructor-password"
                          type="password"
                          placeholder="Create a password"
                          value={instructorForm.password}
                          onChange={(e) => setInstructorForm({...instructorForm, password: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instructor-confirm-password">Confirm Password</Label>
                        <Input
                          id="instructor-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={instructorForm.confirmPassword}
                          onChange={(e) => setInstructorForm({...instructorForm, confirmPassword: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="instructor-terms" 
                          checked={agreedToTerms}
                          onCheckedChange={setAgreedToTerms}
                        />
                        <Label htmlFor="instructor-terms" className="text-sm">
                          I agree to the Terms of Service and Privacy Policy
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Create Instructor Account
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  For Students
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Access to thousands of high-quality courses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Learn at your own pace with lifetime access</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Earn certificates upon course completion</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Join a community of passionate learners</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  For Instructors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Share your expertise with global audience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Earn passive income from your courses</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Access to powerful course creation tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Marketing support to reach more students</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-600">100K+</p>
                <p className="text-sm text-gray-600">Active Students</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-600">$2M+</p>
                <p className="text-sm text-gray-600">Earned by Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignUp;
