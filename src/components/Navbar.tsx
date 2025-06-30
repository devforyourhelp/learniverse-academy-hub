
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">LearnHub</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">
              Courses
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/courses"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/faq"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="flex space-x-2 px-3 py-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
