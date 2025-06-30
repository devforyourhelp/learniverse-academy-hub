
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCourses } from "@/data/mockData";
import { Star, Users, Clock, BookOpen, Award, TrendingUp } from "lucide-react";

const Index = () => {
  const featuredCourses = mockCourses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Learn Without Limits
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Start, switch, or advance your career with thousands of courses, 
              Professional Certificates, and degrees from world-class instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                  Explore Courses
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                  Become an Instructor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">100,000+</h3>
              <p className="text-gray-600">Active Students</p>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h3>
              <p className="text-gray-600">Quality Courses</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses taught by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
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
                  <CardTitle className="text-lg mb-2 line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-2">
                    {course.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                      <span>({course.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link to={`/course/${course.id}`} className="w-full">
                    <Button className="w-full">View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LearnHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the best learning experience with top-quality content and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <TrendingUp className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of real-world experience</p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
              <p className="text-gray-600">Access to thousands of hours of high-quality video content and resources</p>
            </div>
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certificates</h3>
              <p className="text-gray-600">Earn certificates upon completion to showcase your new skills</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
