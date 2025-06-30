
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, Globe, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Former educator with 15+ years in online learning"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Tech innovator passionate about educational technology"
    },
    {
      name: "Emily Johnson",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Curriculum designer focused on effective learning experiences"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in course quality and student experience"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Accessibility",
      description: "Quality education should be accessible to everyone, everywhere"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "Innovation",
      description: "We continuously innovate to improve how people learn and teach"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About LearnHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're on a mission to democratize education and make quality learning 
            accessible to everyone around the world.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                LearnHub was founded with a simple yet powerful vision: to break down barriers 
                to education and create a world where anyone can learn anything, anytime, anywhere.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that education is the key to personal growth, career advancement, 
                and societal progress. Our platform connects passionate instructors with eager 
                learners, creating a vibrant ecosystem of knowledge sharing.
              </p>
              <Link to="/courses">
                <Button size="lg">Explore Our Courses</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop" 
                alt="Students learning"
                className="rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop" 
                alt="Online learning"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              The numbers speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100,000+</h3>
                <p className="text-gray-600">Active Students</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">2,500+</h3>
                <p className="text-gray-600">Courses Available</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
                <p className="text-gray-600">Certificates Earned</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
                <p className="text-gray-600">Countries Reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind LearnHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already transforming their lives through education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Browse Courses
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Sign Up Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
