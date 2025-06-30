
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCourses } from "@/data/mockData";
import { BookOpen, Award, Clock, TrendingUp, Play, CheckCircle } from "lucide-react";

const StudentDashboard = () => {
  // Mock student data
  const studentData = {
    name: "Alex Rodriguez",
    enrolledCourses: 3,
    completedCourses: 1,
    totalHours: 45,
    certificates: 1
  };
  
  // Mock enrolled courses with progress
  const enrolledCourses = [
    { ...mockCourses[0], progress: 75, lastAccessed: "2 hours ago" },
    { ...mockCourses[1], progress: 30, lastAccessed: "1 day ago" },
    { ...mockCourses[2], progress: 100, lastAccessed: "1 week ago", completed: true }
  ];
  
  const recentActivity = [
    { course: "Complete Web Development Bootcamp", action: "Completed lesson", time: "2 hours ago" },
    { course: "Python for Data Science", action: "Started new section", time: "1 day ago" },
    { course: "Digital Marketing Masterclass", action: "Earned certificate", time: "1 week ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {studentData.name}!
          </h1>
          <p className="text-xl text-gray-600">
            Continue your learning journey
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Enrolled Courses</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {studentData.enrolledCourses}
                  </p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {studentData.completedCourses}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Learning Hours</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {studentData.totalHours}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Certificates</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {studentData.certificates}
                  </p>
                </div>
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <Link to="/courses">
                <Button>Browse More Courses</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
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
                      {course.completed && <Badge className="bg-green-100 text-green-800">Completed</Badge>}
                    </div>
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                    </div>
                    
                    <p className="text-sm text-gray-500 mb-4">Last accessed: {course.lastAccessed}</p>
                    
                    <div className="flex gap-2">
                      {course.completed ? (
                        <Button variant="outline" className="flex-1">
                          <Award className="h-4 w-4 mr-2" />
                          View Certificate
                        </Button>
                      ) : (
                        <Button className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      )}
                      <Link to={`/course/${course.id}`}>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>
                  Track your progress across all enrolled courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="flex items-center space-x-4">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-gray-600">{course.instructor}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                      </div>
                      {course.completed && (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
                <CardDescription>
                  View and download your earned certificates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 border-yellow-200 bg-yellow-50">
                    <CardContent className="p-6 text-center">
                      <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Digital Marketing Masterclass</h3>
                      <p className="text-sm text-gray-600 mb-4">Completed on January 15, 2024</p>
                      <Button className="w-full">
                        Download Certificate
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-2 border-dashed border-gray-300">
                    <CardContent className="p-6 text-center">
                      <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2 text-gray-600">More certificates</h3>
                      <p className="text-sm text-gray-500 mb-4">Complete more courses to earn certificates</p>
                      <Link to="/courses">
                        <Button variant="outline" className="w-full">
                          Browse Courses
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your latest learning activities and achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.course}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8">
                  <TrendingUp className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Keep up the great work!</p>
                  <p className="text-sm text-gray-500">Continue learning to see more activities here.</p>
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

export default StudentDashboard;
