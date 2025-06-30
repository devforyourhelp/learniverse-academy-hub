
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCourses, categories } from "@/data/mockData";
import { DollarSign, Users, BookOpen, TrendingUp, Plus, Edit, Eye, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InstructorDashboard = () => {
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: "",
    duration: ""
  });
  
  const { toast } = useToast();
  
  // Mock instructor data
  const instructorData = {
    name: "John Smith",
    totalEarnings: 12543.50,
    totalStudents: 2341,
    totalCourses: 4,
    avgRating: 4.8
  };
  
  const instructorCourses = mockCourses.slice(0, 2); // Mock instructor's courses

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCourse.title || !newCourse.description || !newCourse.category || !newCourse.level || !newCourse.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Course Created!",
      description: "Your new course has been created successfully and is pending review.",
    });
    
    // Reset form
    setNewCourse({
      title: "",
      description: "",
      category: "",
      level: "",
      price: "",
      duration: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Instructor Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Welcome back, {instructorData.name}!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${instructorData.totalEarnings.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {instructorData.totalStudents.toLocaleString()}
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Courses</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {instructorData.totalCourses}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {instructorData.avgRating}
                  </p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="create">Create Course</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Course
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructorCourses.map((course) => (
                <Card key={course.id}>
                  <CardHeader className="p-0">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <CardDescription className="mb-4">
                      {course.description.slice(0, 100)}...
                    </CardDescription>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-gray-600">Students</p>
                        <p className="font-semibold">{course.studentsCount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Rating</p>
                        <p className="font-semibold">{course.rating} ⭐</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Link to={`/course/${course.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle>Create New Course</CardTitle>
                <CardDescription>
                  Fill in the details below to create a new course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCourse} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Course Title *</Label>
                      <Input
                        id="title"
                        placeholder="Enter course title"
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={newCourse.category} onValueChange={(value) => setNewCourse({...newCourse, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map(category => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="level">Level *</Label>
                      <Select value={newCourse.level} onValueChange={(value) => setNewCourse({...newCourse, level: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (USD) *</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="99.99"
                        value={newCourse.price}
                        onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        placeholder="e.g., 25 hours"
                        value={newCourse.duration}
                        onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Course Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what students will learn in this course..."
                      rows={4}
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Create Course
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>
                  View and manage your students across all courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">2,341</p>
                        <p className="text-sm text-gray-600">Total Students</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold text-green-600">89%</p>
                        <p className="text-sm text-gray-600">Completion Rate</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold text-purple-600">4.8</p>
                        <p className="text-sm text-gray-600">Avg. Rating</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center py-8">
                    <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Student management features coming soon!</p>
                    <p className="text-sm text-gray-500">You'll be able to view detailed student analytics and progress here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="earnings">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>
                  Track your earnings and payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">This Month</p>
                        <p className="text-2xl font-bold text-green-600">$2,341</p>
                        <p className="text-sm text-green-600">+12% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">Last Month</p>
                        <p className="text-2xl font-bold">$2,089</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">Total Earned</p>
                        <p className="text-2xl font-bold">$12,543</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-600">Pending</p>
                        <p className="text-2xl font-bold text-yellow-600">$432</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="text-center py-8">
                    <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Detailed earnings analytics coming soon!</p>
                    <p className="text-sm text-gray-500">You'll be able to view charts, payment history, and more detailed breakdowns here.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
