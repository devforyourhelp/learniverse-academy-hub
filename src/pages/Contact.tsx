
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Send us an email anytime",
      details: "support@learnhub.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      description: "Come say hello at our HQ",
      details: "100 Learning St, San Francisco, CA 94105"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "We're available during",
      details: "Mon-Fri: 8am-5pm PST"
    }
  ];

  const helpTopics = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Course Support",
      description: "Having trouble with a course? Need help accessing content?"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-green-600" />,
      title: "Technical Issues",
      description: "Experiencing technical problems with the platform?"
    },
    {
      icon: <HelpCircle className="h-8 w-8 text-purple-600" />,
      title: "General Questions",
      description: "Have questions about our services or policies?"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions, concerns, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                  <p className="text-gray-900 font-medium">{info.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course-support">Course Support</SelectItem>
                        <SelectItem value="technical">Technical Issues</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="instructor">Instructor Support</SelectItem>
                        <SelectItem value="general">General Questions</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Help Topics */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How can we help you?
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose the category that best describes your inquiry for faster assistance.
                </p>
              </div>
              
              <div className="space-y-4">
                {helpTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {topic.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {topic.title}
                          </h3>
                          <p className="text-gray-600">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Need immediate help?
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Check out our FAQ section for quick answers to common questions.
                  </p>
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Visit FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find quick answers to the most common questions about LearnHub.
          </p>
          <Button size="lg" asChild>
            <a href="/faq">View All FAQs</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
