
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, HelpCircle, BookOpen, CreditCard, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategories = [
    {
      id: "general",
      title: "General",
      icon: <HelpCircle className="h-5 w-5" />,
      faqs: [
        {
          question: "What is LearnHub?",
          answer: "LearnHub is an online learning marketplace that connects students with expert instructors. We offer thousands of courses across various subjects including technology, business, design, and more."
        },
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking the 'Sign Up' button in the top navigation. Choose whether you want to sign up as a student or instructor, fill in your details, and verify your email address."
        },
        {
          question: "Is LearnHub free to use?",
          answer: "Creating an account on LearnHub is free. However, most courses require payment to access. We also offer some free courses and previews to help you get started."
        },
        {
          question: "What devices can I use to access courses?",
          answer: "LearnHub works on all modern devices including computers, tablets, and smartphones. You can access your courses through any web browser or our mobile apps."
        }
      ]
    },
    {
      id: "courses",
      title: "Courses",
      icon: <BookOpen className="h-5 w-5" />,
      faqs: [
        {
          question: "How do I enroll in a course?",
          answer: "Browse our course catalog, click on a course that interests you, review the course details, and click 'Enroll Now'. You'll be taken to the checkout page to complete your purchase."
        },
        {
          question: "Can I access courses offline?",
          answer: "Currently, courses need to be accessed online. However, we're working on offline capabilities that will be available in our mobile apps soon."
        },
        {
          question: "How long do I have access to a course?",
          answer: "Once you purchase a course, you have lifetime access to it. You can watch the videos, download resources, and revisit content anytime."
        },
        {
          question: "Can I get a refund if I don't like a course?",
          answer: "Yes! We offer a 30-day money-back guarantee on all courses. If you're not satisfied, contact our support team for a full refund."
        },
        {
          question: "Do I get a certificate after completing a course?",
          answer: "Yes, you'll receive a certificate of completion for each course you finish. Certificates can be downloaded and shared on professional networks like LinkedIn."
        }
      ]
    },
    {
      id: "payments",
      title: "Payments & Billing",
      icon: <CreditCard className="h-5 w-5" />,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers in supported regions."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. The price you see is the price you pay. Some regions may have applicable taxes added at checkout."
        },
        {
          question: "Can I get a receipt for my purchase?",
          answer: "Yes, you'll automatically receive an email receipt after every purchase. You can also access all your receipts from your account dashboard."
        },
        {
          question: "Do you offer discounts or promotions?",
          answer: "Yes! We regularly offer promotions and discounts. Sign up for our newsletter or follow us on social media to stay updated on the latest deals."
        }
      ]
    },
    {
      id: "instructors",
      title: "For Instructors",
      icon: <Users className="h-5 w-5" />,
      faqs: [
        {
          question: "How do I become an instructor?",
          answer: "Sign up for an instructor account, complete your profile, and submit your first course for review. Our team will guide you through the process and help ensure your course meets our quality standards."
        },
        {
          question: "How much can I earn as an instructor?",
          answer: "Instructor earnings vary based on course popularity, pricing, and student enrollment. Our top instructors earn thousands of dollars per month. You keep 70% of the revenue from your course sales."
        },
        {
          question: "What support do you provide to instructors?",
          answer: "We provide comprehensive support including course creation guidelines, marketing assistance, technical support, and access to instructor community forums."
        },
        {
          question: "How long does it take to review a course?",
          answer: "Course review typically takes 2-5 business days. We review courses for quality, accuracy, and adherence to our content guidelines before they go live."
        }
      ]
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: <Settings className="h-5 w-5" />,
      faqs: [
        {
          question: "I'm having trouble accessing my course. What should I do?",
          answer: "First, try refreshing your browser or logging out and back in. If the problem persists, clear your browser cache or try a different browser. Contact support if you still have issues."
        },
        {
          question: "Why is my video not playing?",
          answer: "Video playback issues are usually related to internet connection or browser settings. Try pausing other downloads, switching to a different network, or updating your browser."
        },
        {
          question: "Can I change my account email address?",
          answer: "Yes, you can update your email address in your account settings. You'll need to verify the new email address before the change takes effect."
        },
        {
          question: "How do I reset my password?",
          answer: "Click the 'Forgot Password' link on the login page, enter your email address, and follow the instructions in the reset email we send you."
        }
      ]
    }
  ];

  const allFAQs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFAQs = searchTerm 
    ? allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFAQs;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about LearnHub
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-lg h-12"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Search Results ({filteredFAQs.length})
              </h2>
              <Card>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`search-${index}`} className="px-6">
                        <AccordionTrigger className="text-left">
                          <div>
                            <h3 className="font-semibold">{faq.question}</h3>
                            <p className="text-sm text-gray-600 mt-1">Category: {faq.category}</p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4">
                          <p className="text-gray-700">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-xl text-gray-600 mb-4">No results found for "{searchTerm}"</p>
                  <Button onClick={() => setSearchTerm("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          ) : (
            // Categorized FAQs
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                {faqCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {category.icon}
                        {category.title}
                      </CardTitle>
                      <CardDescription>
                        Common questions about {category.title.toLowerCase()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`} className="px-6">
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                              <p className="text-gray-700">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still need help?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">Contact Support</Button>
            </Link>
            <Button size="lg" variant="outline">
              Live Chat
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQ;
