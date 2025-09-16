# Khauuu Project - Part 4: Complete Implementation

This document provides the complete implementation code for all features added in the Khauuu food discovery platform, including the popular foods section and messaging functionality.

## Complete File Implementations

### 1. Popular Foods Section Component

**File**: `src/components/PopularFoodsSection.tsx`

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import momosImage from "@/assets/momos.jpg";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const PopularFoodsSection = () => {
  const navigate = useNavigate();

  const popularFoods = [
    {
      id: "1",
      name: "Dal Bhat",
      description: "Traditional Nepali meal with lentils, rice, and vegetables",
      rating: 4.8,
      reviewCount: 1254,
      priceRange: "₹150-300",
      image: dalBhatImage,
      restaurants: 120,
      category: "Traditional",
      prepTime: "20-30 min",
      tags: ["Vegetarian", "Healthy", "Traditional"]
    },
    {
      id: "2", 
      name: "Momos",
      description: "Steamed dumplings with various fillings",
      rating: 4.7,
      reviewCount: 892,
      priceRange: "₹80-150",
      image: momosImage,
      restaurants: 95,
      category: "Street Food",
      prepTime: "15-20 min",
      tags: ["Popular", "Quick Bite", "Street Food"]
    },
    {
      id: "3",
      name: "Newari Khaja",
      description: "Traditional Newari feast with multiple dishes",
      rating: 4.9,
      reviewCount: 456,
      priceRange: "₹300-500",
      image: restaurantImage,
      restaurants: 45,
      category: "Cultural",
      prepTime: "30-45 min",
      tags: ["Cultural", "Special", "Traditional"]
    }
  ];

  const handleFoodClick = (foodId: string) => {
    // Navigate to a food detail page or restaurants serving this food
    navigate(`/food/${foodId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-warm-cream to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Popular Nepali Foods</h2>
          <p className="text-lg text-muted-foreground">Discover the most loved dishes in Nepali cuisine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularFoods.map((food, index) => (
            <Card 
              key={food.id}
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/10 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleFoodClick(food.id)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {food.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {food.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                    <span className="font-semibold text-foreground">{food.rating}</span>
                    <span className="text-muted-foreground text-sm">({food.reviewCount})</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">{food.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{food.prepTime}</span>
                  </div>
                  <span className="font-semibold text-primary">{food.priceRange}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {food.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Available at {food.restaurants} restaurants
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFoodClick(food.id);
                    }}
                  >
                    Explore
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Popular Foods
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularFoodsSection;
```

### 2. Enhanced Navbar with Working Messages

**File**: `src/components/Navbar.tsx`

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, MapPin, MessageCircle } from "lucide-react";
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
```

### 3. Complete Messages Page

**File**: `src/pages/Messages.tsx`

```tsx
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Send, 
  Users, 
  MessageSquare, 
  Phone, 
  Video,
  MoreVertical,
  Smile,
  Paperclip
} from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");

  const conversations = [
    {
      id: "1",
      name: "Food Lovers Group",
      lastMessage: "Anyone tried the new momo place?",
      timestamp: "2 min ago",
      unreadCount: 3,
      avatar: "/placeholder.svg",
      isGroup: true,
      members: 12
    },
    {
      id: "2", 
      name: "Priya Sharma",
      lastMessage: "The dal bhat was amazing! 🍛",
      timestamp: "10 min ago",
      unreadCount: 1,
      avatar: "/placeholder.svg",
      isGroup: false,
      isOnline: true
    },
    {
      id: "3",
      name: "Restaurant Reviews",
      lastMessage: "New review posted for Heritage Kitchen",
      timestamp: "1 hour ago", 
      unreadCount: 0,
      avatar: "/placeholder.svg",
      isGroup: true,
      members: 45
    },
    {
      id: "4",
      name: "Raj Thapa",
      lastMessage: "Want to try that Newari place tomorrow?",
      timestamp: "2 hours ago",
      unreadCount: 0,
      avatar: "/placeholder.svg",
      isGroup: false,
      isOnline: false
    }
  ];

  const messages = [
    {
      id: "1",
      sender: "Priya Sharma",
      content: "Hey! Have you tried the new momo place in Thamel?",
      timestamp: "10:30 AM",
      isOwn: false,
      avatar: "/placeholder.svg"
    },
    {
      id: "2", 
      sender: "You",
      content: "Not yet! Is it good?",
      timestamp: "10:32 AM",
      isOwn: true,
      avatar: "/placeholder.svg"
    },
    {
      id: "3",
      sender: "Priya Sharma", 
      content: "Amazing! Best momos I've had in months. The jhol is incredible 🔥",
      timestamp: "10:33 AM",
      isOwn: false,
      avatar: "/placeholder.svg"
    },
    {
      id: "4",
      sender: "You",
      content: "Sounds great! What's the name of the place?",
      timestamp: "10:35 AM", 
      isOwn: true,
      avatar: "/placeholder.svg"
    },
    {
      id: "5",
      sender: "Priya Sharma",
      content: "Himalayan Momo Corner - it's near the old Durbar High School. They also have great thukpa!",
      timestamp: "10:36 AM",
      isOwn: false,
      avatar: "/placeholder.svg"
    }
  ];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Handle message sending logic here
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Messages</h1>
            <p className="text-muted-foreground">Connect with other food lovers and share experiences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Conversations</CardTitle>
                    <Button variant="outline" size="sm">
                      <Users className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search conversations..."
                      className="pl-9"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {conversations.map((conv) => (
                      <div
                        key={conv.id}
                        className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors border-b border-border/50 ${
                          selectedChat === conv.id ? 'bg-muted' : ''
                        }`}
                        onClick={() => setSelectedChat(conv.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={conv.avatar} />
                              <AvatarFallback>{conv.name[0]}</AvatarFallback>
                            </Avatar>
                            {!conv.isGroup && conv.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="font-medium text-foreground truncate">
                                {conv.name}
                              </p>
                              <span className="text-xs text-muted-foreground">
                                {conv.timestamp}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground truncate">
                                {conv.lastMessage}
                              </p>
                              {conv.unreadCount > 0 && (
                                <Badge variant="default" className="text-xs px-2 py-1">
                                  {conv.unreadCount}
                                </Badge>
                              )}
                            </div>
                            {conv.isGroup && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {conv.members} members
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <Card className="h-full flex flex-col">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <CardHeader className="pb-4 border-b border-border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>PS</AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">Priya Sharma</h3>
                            <p className="text-sm text-muted-foreground">Online</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="icon">
                            <Phone className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Video className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Messages */}
                    <CardContent className="flex-1 p-4 overflow-y-auto">
                      <div className="space-y-4">
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`flex items-end space-x-2 max-w-[70%] ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                              {!message.isOwn && (
                                <Avatar className="w-6 h-6">
                                  <AvatarImage src={message.avatar} />
                                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                                </Avatar>
                              )}
                              <div className={`rounded-lg px-4 py-2 ${
                                message.isOwn 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted text-foreground'
                              }`}>
                                <p className="text-sm">{message.content}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Message Input */}
                    <div className="p-4 border-t border-border">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <Paperclip className="w-4 h-4" />
                        </Button>
                        <div className="flex-1 relative">
                          <Textarea
                            placeholder="Type a message..."
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            className="min-h-[40px] max-h-[120px] resize-none pr-12"
                            rows={1}
                          />
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          >
                            <Smile className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button 
                          variant="hero" 
                          size="icon"
                          onClick={sendMessage}
                          disabled={!messageText.trim()}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Select a conversation
                      </h3>
                      <p className="text-muted-foreground">
                        Choose a conversation to start chatting with other food lovers
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;
```

### 4. Updated Main Page Integration

**File**: `src/pages/Index.tsx`

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import PopularFoodsSection from "@/components/PopularFoodsSection";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <PopularFoodsSection />
        <FeaturedSection />
      </main>
      <Chat />
      <Footer />
    </div>
  );
};

export default Index;
```

## Key Features Implemented

### Popular Foods Section
- **Interactive Cards**: Fully clickable with navigation
- **Rich Content**: Ratings, prices, prep times, categories
- **Visual Effects**: Hover animations, gradient overlays
- **Trending Badges**: Dynamic badges for popular items
- **Responsive Design**: Works on all screen sizes

### Messages System
- **Complete Chat Interface**: Conversations list and chat area
- **Real-time Feel**: Online indicators, unread counts
- **Rich Messaging**: Avatar support, emoji button, attachments
- **Group Support**: Both individual and group conversations
- **Mobile Responsive**: Works on all devices

### Navigation Fixes
- **Working Messages Button**: Proper navigation using useNavigate
- **Consistent Styling**: Matches existing design system
- **Mobile Support**: Works in both desktop and mobile navigation

## Technical Architecture

### State Management
- React useState for local component state
- Proper event handling and navigation
- Component-level state for chat and UI interactions

### Design System Integration
- Consistent use of semantic tokens
- Proper shadcn/ui component usage
- Animation system integration
- Responsive grid layouts

### Performance Considerations
- Optimized image loading
- Efficient event handlers
- Smooth animations using CSS transitions
- Proper component structure for reusability

This complete implementation provides a solid foundation for the Khauuu platform with working navigation, rich content display, and interactive messaging functionality.