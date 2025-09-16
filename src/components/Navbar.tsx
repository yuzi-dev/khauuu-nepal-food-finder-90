import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Menu, X, MapPin, MessageCircle, Bell, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">Khauuu</div>
            <div className="text-sm text-muted-foreground hidden sm:block">खाऊ</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Discover</a>
            <a href="/restaurants" className="text-foreground hover:text-primary transition-colors">Restaurants</a>
            <a href="/reviews" className="text-foreground hover:text-primary transition-colors">Reviews</a>
            <a href="/offers" className="text-foreground hover:text-primary transition-colors">Offers</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="warm" size="sm">
              <MapPin className="w-4 h-4" />
              Kathmandu
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/search')}
            >
              <Users className="w-4 h-4" />
              Find Users
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/notifications')}
              className="relative"
            >
              <Bell className="w-4 h-4" />
              <Badge variant="destructive" className="absolute -top-2 -right-2 text-xs w-5 h-5 p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/messages')}
            >
              <MessageCircle className="w-4 h-4" />
              Messages
            </Button>
            <Button variant="outline" size="sm">Log In</Button>
            <Button variant="hero" size="sm">
              <a href="/profile">Sign Up</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-card">
              <a href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Discover</a>
              <a href="/restaurants" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Restaurants</a>
              <a href="/reviews" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="/offers" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Offers</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="warm" size="sm">
                  <MapPin className="w-4 h-4" />
                  Kathmandu
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/search')}
                >
                  <Users className="w-4 h-4" />
                  Find Users
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/notifications')}
                  className="relative justify-start"
                >
                  <Bell className="w-4 h-4" />
                  Notifications
                  <Badge variant="destructive" className="ml-2 text-xs">
                    3
                  </Badge>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/messages')}
                >
                  <MessageCircle className="w-4 h-4" />
                  Messages
                </Button>
                <Button variant="outline" size="sm">Log In</Button>
                <Button variant="hero" size="sm">
                  <a href="/profile">Sign Up</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;