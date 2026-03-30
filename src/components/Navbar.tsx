import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Mock Test", path: "/mock-test" },
  { label: "Analysis", path: "/analysis" },
  { label: "Syllabus", path: "/syllabus" },
  { label: "Study Materials", path: "/study-materials" },
  { label: "YouTube Links", path: "/youtube-links" },
  { label: "Previous Papers", path: "/previous-papers" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="gradient-navy sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-7 w-7 text-accent" />
            <span className="text-lg font-bold text-primary-foreground font-heading">
              TNPSC <span className="text-accent">Prep</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-navy-light"
                    : "text-primary-foreground/80 hover:text-accent hover:bg-navy-light"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2">
            <Link to="/admin">
              <Button variant="outline" size="sm" className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground text-xs">
                <Shield className="h-3.5 w-3.5 mr-1" />
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent bg-navy-light"
                    : "text-primary-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/admin" onClick={() => setIsOpen(false)}>
              <Button variant="outline" size="sm" className="mt-2 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground text-xs w-full">
                <Shield className="h-3.5 w-3.5 mr-1" />
                Admin Panel
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
