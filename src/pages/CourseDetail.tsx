
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCourses } from "@/data/mockData";
import { Star, Clock, Users, Globe, Award, CheckCircle, Play } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/courses">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-blue-600 text-white">{course.category}</Badge>
                <Badge variant="outline" className="border-white text-white">{course.level}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl mb-6 text-gray-300">{course.description}</p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-gray-300">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-5 w-5" />
                  <span>{course.studentsCount.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={course.instructorAvatar} 
                  alt={course.instructor}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">Created by {course.instructor}</p>
                  <p className="text-gray-300 text-sm">Expert Instructor</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader className="p-0">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-green-600">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  
                  <Link to={`/checkout/${course.id}`}>
                    <Button className="w-full mb-3" size="lg">
                      Enroll Now
                    </Button>
                  </Link>
                  
                  <Button variant="outline" className="w-full mb-4">
                    Add to Wishlist
                  </Button>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration} on-demand video</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What you'll learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <p key={index} className="text-gray-700">• {req}</p>
                    ))}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Course Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {course.description} This comprehensive course is designed to take you from beginner to 
                      professional level. You'll work on real-world projects and learn industry best practices 
                      that will prepare you for a successful career in {course.category.toLowerCase()}.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="curriculum">
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                    <CardDescription>
                      {course.courseContent.length} sections • {course.duration} total length
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {course.courseContent.map((section, index) => (
                        <AccordionItem key={index} value={`section-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div>
                              <h3 className="font-semibold">{section.section}</h3>
                              <p className="text-sm text-gray-600">{section.lessons.length} lessons</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                                  <Play className="h-4 w-4 text-gray-600" />
                                  <span className="text-gray-700">{lesson}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="instructor">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={course.instructorAvatar} 
                        alt={course.instructor}
                        className="w-24 h-24 rounded-full"
                      />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                        <p className="text-gray-600 mb-4">Expert {course.category} Instructor</p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-blue-600">{course.rating}</p>
                            <p className="text-sm text-gray-600">Instructor Rating</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-green-600">{course.studentsCount.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Students</p>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          An experienced professional with years of industry experience, specializing in {course.category.toLowerCase()}. 
                          Passionate about teaching and helping students achieve their goals through practical, hands-on learning.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Related Courses</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockCourses.filter(c => c.id !== course.id && c.category === course.category).slice(0, 3).map((relatedCourse) => (
                  <Link key={relatedCourse.id} to={`/course/${relatedCourse.id}`}>
                    <div className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <img 
                        src={relatedCourse.image} 
                        alt={relatedCourse.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1">{relatedCourse.title}</h4>
                        <p className="text-sm text-gray-600">{relatedCourse.instructor}</p>
                        <p className="text-sm font-semibold text-green-600">${relatedCourse.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
