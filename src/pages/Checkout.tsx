
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockCourses } from "@/data/mockData";
import { CreditCard, Lock, ShieldCheck, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { courseId } = useParams();
  const course = mockCourses.find(c => c.id === courseId);
  const { toast } = useToast();
  
  const [paymentData, setPaymentData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    state: "",
    zipCode: ""
  });
  
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [processing, setProcessing] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Browse Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive"
      });
      return;
    }
    
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Payment Successful!",
      description: "You now have access to the course. Happy learning!",
    });
    
    setProcessing(false);
    
    // In a real app, this would redirect to the course or student dashboard
  };

  const subtotal = course.price;
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to={`/course/${course.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to course
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>
                  Complete your purchase to get instant access to the course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={paymentData.email}
                      onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={paymentData.firstName}
                        onChange={(e) => setPaymentData({...paymentData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={paymentData.lastName}
                        onChange={(e) => setPaymentData({...paymentData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        placeholder="United States"
                        value={paymentData.country}
                        onChange={(e) => setPaymentData({...paymentData, country: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        placeholder="California"
                        value={paymentData.state}
                        onChange={(e) => setPaymentData({...paymentData, state: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="12345"
                      value={paymentData.zipCode}
                      onChange={(e) => setPaymentData({...paymentData, zipCode: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreeToTerms}
                      onCheckedChange={setAgreeToTerms}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy
                    </Label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={processing}
                  >
                    {processing ? (
                      "Processing..."
                    ) : (
                      <>
                        <Lock className="h-4 w-4 mr-2" />
                        Complete Purchase - ${total.toFixed(2)}
                      </>
                    )}
                  </Button>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Secure SSL encrypted payment</span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-gray-600">by {course.instructor}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Course Price</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">What's included:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• {course.duration} of on-demand video</li>
                    <li>• Full lifetime access</li>
                    <li>• Certificate of completion</li>
                    <li>• Access on mobile and desktop</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  <p>By completing your purchase you agree to these Terms of Service.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
