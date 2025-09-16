# Khauuu Project - Complete Codebase (Part 2)

## Pages

### src/pages/Index.tsx
```typescript
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/FeaturedSection";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
      </main>
      <Chat />
      <Footer />
    </div>
  );
};

export default Index;
```

### src/pages/Restaurants.tsx
```typescript
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, Star, DollarSign } from "lucide-react";
import momosImage from "@/assets/momos.jpg";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const restaurants = [
    {
      id: "1",
      name: "Himalayan Delights",
      cuisine: "Traditional Nepali",
      rating: 4.8,
      reviewCount: 245,
      priceRange: "₹₹",
      distance: "0.8 km",
      image: dalBhatImage,
      isOpen: true,
      deliveryTime: "25-35 min",
      tags: ["Vegetarian Friendly", "Family Style", "Authentic"]
    },
    {
      id: "2",
      name: "Momo Palace",
      cuisine: "Tibetan • Nepali",
      rating: 4.6,
      reviewCount: 189,
      priceRange: "₹",
      distance: "1.2 km",
      image: momosImage,
      isOpen: true,
      deliveryTime: "15-25 min",
      tags: ["Quick Bite", "Street Food", "Popular"]
    },
    {
      id: "3",
      name: "Heritage Kitchen",
      cuisine: "Newari • Traditional",
      rating: 4.9,
      reviewCount: 312,
      priceRange: "₹₹₹",
      distance: "2.1 km",
      image: restaurantImage,
      isOpen: false,
      deliveryTime: "35-45 min",
      tags: ["Fine Dining", "Cultural", "Special Occasion"]
    },
    {
      id: "4",
      name: "Yak & Yeti",
      cuisine: "International • Nepali",
      rating: 4.7,
      reviewCount: 456,
      priceRange: "₹₹₹",
      distance: "3.2 km",
      image: restaurantImage,
      isOpen: true,
      deliveryTime: "30-40 min",
      tags: ["Luxury", "International", "Hotel Restaurant"]
    },
    {
      id: "5",
      name: "Thakali Kitchen",
      cuisine: "Thakali • Regional",
      rating: 4.5,
      reviewCount: 123,
      priceRange: "₹₹",
      distance: "1.8 km",
      image: dalBhatImage,
      isOpen: true,
      deliveryTime: "20-30 min",
      tags: ["Regional Specialty", "Healthy", "Traditional"]
    },
    {
      id: "6",
      name: "Newari Ghar",
      cuisine: "Newari • Cultural",
      rating: 4.4,
      reviewCount: 89,
      priceRange: "₹₹",
      distance: "2.5 km",
      image: restaurantImage,
      isOpen: true,
      deliveryTime: "25-35 min",
      tags: ["Cultural Experience", "Traditional", "Local Favorite"]
    }
  ];

  const filters = [
    "Vegetarian", "Quick Delivery", "Highly Rated", "Budget Friendly", 
    "Fine Dining", "Street Food", "Traditional", "Open Now"
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Discover Restaurants</h1>
            <p className="text-muted-foreground">Find the perfect place for your next meal</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-xl p-6 shadow-card mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search restaurants, dishes, or cuisine..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              {filters.map(filter => (
                <Badge
                  key={filter}
                  variant={selectedFilters.includes(filter) ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleFilter(filter)}
                >
                  {filter}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Filter className="w-4 h-4" />
                  <span>More Filters</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>Rating: 4.0+</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>All Price Ranges</span>
                </div>
              </div>
              <Button variant="outline">Advanced Filters</Button>
            </div>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {restaurants.length} restaurants found
              </h2>
              <p className="text-muted-foreground">in Kathmandu</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Button variant="outline" size="sm">Relevance</Button>
            </div>
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Load More Restaurants
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;
```

### src/pages/Offers.tsx
```typescript
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  MapPin, 
  Clock, 
  Percent,
  Gift,
  Tag,
  Calendar,
  Search,
  Filter,
  TrendingDown
} from "lucide-react";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import momosImage from "@/assets/momos.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const Offers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const offers = [
    {
      id: "1",
      title: "50% Off on Traditional Thali",
      restaurant: "Himalayan Delights",
      description: "Get 50% discount on our authentic dal bhat thali. Perfect for experiencing traditional Nepali flavors.",
      discount: "50%",
      originalPrice: "₹450",
      discountedPrice: "₹225",
      validUntil: "Dec 31, 2024",
      category: "food",
      image: dalBhatImage,
      rating: 4.8,
      distance: "0.8 km",
      code: "THALI50",
      terms: ["Valid only on weekdays", "Cannot be combined with other offers", "Minimum order ₹400"],
      isPopular: true
    },
    {
      id: "2",
      title: "Buy 2 Get 1 Free Momos",
      restaurant: "Momo Palace",
      description: "Order any 2 plates of momos and get the 3rd plate absolutely free. Choose from chicken, veg, or buff momos.",
      discount: "33%",
      originalPrice: "₹540",
      discountedPrice: "₹360",
      validUntil: "Jan 15, 2025",
      category: "combo",
      image: momosImage,
      rating: 4.6,
      distance: "1.2 km",
      code: "MOMO321",
      terms: ["Valid for dine-in only", "Cheapest plate will be free", "Valid all days"],
      isPopular: false
    },
    {
      id: "3",
      title: "Happy Hour - 20% Off All Items",
      restaurant: "Heritage Kitchen", 
      description: "Enjoy 20% discount on our entire menu during happy hours (4-6 PM). Experience fine Newari dining at discounted prices.",
      discount: "20%",
      originalPrice: "₹800",
      discountedPrice: "₹640",
      validUntil: "Ongoing",
      category: "time-based",
      image: restaurantImage,
      rating: 4.9,
      distance: "2.1 km",
      code: "HAPPY20",
      terms: ["Valid 4-6 PM only", "Not valid on weekends", "Advance booking required"],
      isPopular: true
    },
    {
      id: "4",
      title: "Weekend Special - Family Feast",
      restaurant: "Yak & Yeti",
      description: "Special weekend family package for 4 people including appetizers, mains, and desserts.",
      discount: "25%",
      originalPrice: "₹2400",
      discountedPrice: "₹1800",
      validUntil: "Dec 30, 2024",
      category: "family",
      image: restaurantImage,
      rating: 4.7,
      distance: "3.2 km",
      code: "FAMILY25",
      terms: ["Valid weekends only", "For 4 people minimum", "Includes fixed menu"],
      isPopular: false
    },
    {
      id: "5",
      title: "Student Discount - 15% Off",
      restaurant: "Himalayan Delights",
      description: "Students get 15% off on all orders with valid student ID. Perfect for budget-conscious students.",
      discount: "15%",
      originalPrice: "₹400",
      discountedPrice: "₹340",
      validUntil: "Ongoing",
      category: "student",
      image: dalBhatImage,
      rating: 4.8,
      distance: "0.8 km",
      code: "STUDENT15",
      terms: ["Valid student ID required", "Valid all days", "Cannot combine with other offers"],
      isPopular: false
    },
    {
      id: "6",
      title: "First Order - Flat ₹100 Off",
      restaurant: "Momo Palace",
      description: "New customers get flat ₹100 off on their first order. Minimum order value ₹300.",
      discount: "₹100",
      originalPrice: "₹300",
      discountedPrice: "₹200",
      validUntil: "Jan 31, 2025",
      category: "new-user",
      image: momosImage,
      rating: 4.6,
      distance: "1.2 km",
      code: "FIRST100",
      terms: ["First order only", "Minimum order ₹300", "Valid for new users"],
      isPopular: true
    }
  ];

  const categories = [
    { id: "all", label: "All Offers", icon: Tag },
    { id: "food", label: "Food Discounts", icon: Percent },
    { id: "combo", label: "Combo Deals", icon: Gift },
    { id: "time-based", label: "Happy Hours", icon: Clock },
    { id: "family", label: "Family Offers", icon: Calendar },
    { id: "student", label: "Student Deals", icon: TrendingDown },
    { id: "new-user", label: "New User", icon: Star }
  ];

  const filteredOffers = offers.filter(offer => {
    const matchesSearch = offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offer.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || offer.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Special Offers & Deals</h1>
            <p className="text-muted-foreground">Save money while enjoying delicious food at your favorite restaurants</p>
          </div>

          {/* Search and Filters */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search offers by restaurant or deal type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "secondary"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors flex items-center space-x-1"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span>{category.label}</span>
                  </Badge>
                );
              })}
            </div>
          </Card>

          {/* Featured Offer */}
          <Card className="mb-8 bg-gradient-hero text-primary-foreground overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8">
                  <Badge className="bg-nepali-gold text-foreground mb-4">
                    🔥 Limited Time Offer
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">Festival Special - Up to 60% Off</h2>
                  <p className="text-primary-foreground/90 mb-6">
                    Celebrate with amazing discounts across all restaurants. Valid during festival season only!
                  </p>
                  <Button variant="accent" size="lg">
                    Explore Festival Deals
                  </Button>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={dalBhatImage}
                    alt="Festival Special"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Offers Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {filteredOffers.length} Offers Available
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button variant="outline" size="sm">Best Discount</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOffers.map((offer) => (
                <Card key={offer.id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="relative">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-primary-foreground font-bold">
                        {offer.discount} OFF
                      </Badge>
                    </div>
                    {offer.isPopular && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-nepali-gold text-foreground">
                          🔥 Popular
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-3 right-3">
                      <Badge variant="secondary" className="bg-background/90">
                        {offer.validUntil}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{offer.title}</h3>
                        <p className="text-primary hover:underline cursor-pointer font-medium">{offer.restaurant}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                          <span className="text-sm font-medium">{offer.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{offer.distance}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{offer.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg line-through text-muted-foreground">{offer.originalPrice}</span>
                        <span className="text-xl font-bold text-primary">{offer.discountedPrice}</span>
                      </div>
                      <div className="bg-muted px-3 py-1 rounded-lg">
                        <span className="text-sm font-mono">{offer.code}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <details className="text-sm">
                        <summary className="text-muted-foreground cursor-pointer hover:text-foreground">
                          Terms & Conditions
                        </summary>
                        <ul className="mt-2 space-y-1 text-muted-foreground">
                          {offer.terms.map((term, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span>•</span>
                              <span>{term}</span>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="hero" className="flex-1">
                        Claim Offer
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Restaurant
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-12 p-8 bg-gradient-card border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Never Miss a Deal!</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to get notified about exclusive offers and discounts from your favorite restaurants
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button variant="hero">Subscribe</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;
```

### src/pages/Favorites.tsx
```typescript
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  Search, 
  Plus,
  Star,
  List,
  Grid3X3,
  Filter,
  Share2
} from "lucide-react";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import momosImage from "@/assets/momos.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const Favorites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedList, setSelectedList] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showCreateList, setShowCreateList] = useState(false);

  const favoriteLists = [
    {
      id: "all",
      name: "All Favorites",
      count: 12,
      isDefault: true
    },
    {
      id: "must-try",
      name: "Must Try",
      count: 8,
      color: "primary",
      isDefault: false
    },
    {
      id: "date-night",
      name: "Date Night Spots",
      count: 5,
      color: "accent",
      isDefault: false
    },
    {
      id: "quick-bites",
      name: "Quick Bites",
      count: 6,
      color: "secondary",
      isDefault: false
    },
    {
      id: "family-friendly",
      name: "Family Friendly",
      count: 4,
      color: "muted",
      isDefault: false
    }
  ];

  const favoriteRestaurants = [
    {
      id: "1",
      name: "Himalayan Delights",
      cuisine: "Traditional Nepali",
      rating: 4.8,
      reviewCount: 245,
      priceRange: "₹₹",
      distance: "0.8 km",
      image: dalBhatImage,
      isOpen: true,
      deliveryTime: "25-35 min",
      tags: ["Vegetarian Friendly", "Family Style", "Authentic"],
      lists: ["must-try", "family-friendly"],
      addedDate: "2 weeks ago"
    },
    {
      id: "2",
      name: "Momo Palace",
      cuisine: "Tibetan • Nepali",
      rating: 4.6,
      reviewCount: 189,
      priceRange: "₹",
      distance: "1.2 km",
      image: momosImage,
      isOpen: true,
      deliveryTime: "15-25 min",
      tags: ["Quick Bite", "Street Food", "Popular"],
      lists: ["quick-bites", "must-try"],
      addedDate: "1 week ago"
    },
    {
      id: "3",
      name: "Heritage Kitchen",
      cuisine: "Newari • Traditional",
      rating: 4.9,
      reviewCount: 312,
      priceRange: "₹₹₹",
      distance: "2.1 km",
      image: restaurantImage,
      isOpen: false,
      deliveryTime: "35-45 min",
      tags: ["Fine Dining", "Cultural", "Special Occasion"],
      lists: ["date-night", "must-try"],
      addedDate: "3 days ago"
    },
    {
      id: "4",
      name: "Yak & Yeti",
      cuisine: "International • Nepali",
      rating: 4.7,
      reviewCount: 456,
      priceRange: "₹₹₹",
      distance: "3.2 km",
      image: restaurantImage,
      isOpen: true,
      deliveryTime: "30-40 min",
      tags: ["Luxury", "International", "Hotel Restaurant"],
      lists: ["date-night"],
      addedDate: "1 month ago"
    },
    {
      id: "5",
      name: "Thakali Kitchen",
      cuisine: "Thakali • Regional",
      rating: 4.5,
      reviewCount: 123,
      priceRange: "₹₹",
      distance: "1.8 km",
      image: dalBhatImage,
      isOpen: true,
      deliveryTime: "20-30 min",
      tags: ["Regional Specialty", "Healthy", "Traditional"],
      lists: ["family-friendly", "must-try"],
      addedDate: "5 days ago"
    },
    {
      id: "6",
      name: "Newari Ghar",
      cuisine: "Newari • Cultural",
      rating: 4.4,
      reviewCount: 89,
      priceRange: "₹₹",
      distance: "2.5 km",
      image: restaurantImage,
      isOpen: true,
      deliveryTime: "25-35 min",
      tags: ["Cultural Experience", "Traditional", "Local Favorite"],
      lists: ["family-friendly"],
      addedDate: "2 weeks ago"
    }
  ];

  const filteredRestaurants = favoriteRestaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesList = selectedList === "all" || restaurant.lists.includes(selectedList);
    
    return matchesSearch && matchesList;
  });

  const selectedListData = favoriteLists.find(list => list.id === selectedList);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">My Favorites</h1>
            <p className="text-muted-foreground">Your saved restaurants organized just the way you like</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Create New List */}
              <Card className="p-4">
                <Button 
                  variant="hero" 
                  className="w-full mb-4"
                  onClick={() => setShowCreateList(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create New List
                </Button>

                {showCreateList && (
                  <div className="space-y-3 p-3 border border-border rounded-lg bg-muted/20">
                    <Input placeholder="List name" />
                    <div className="flex space-x-2">
                      <Button size="sm" variant="hero">Create</Button>
                      <Button size="sm" variant="outline" onClick={() => setShowCreateList(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}
              </Card>

              {/* Lists */}
              <Card className="p-4">
                <h3 className="font-semibold mb-4">My Lists</h3>
                <div className="space-y-2">
                  {favoriteLists.map((list) => (
                    <div
                      key={list.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedList === list.id ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                      }`}
                      onClick={() => setSelectedList(list.id)}
                    >
                      <div className="flex items-center space-x-2">
                        <Heart className={`w-4 h-4 ${selectedList === list.id ? 'fill-current' : ''}`} />
                        <span className="font-medium">{list.name}</span>
                      </div>
                      <Badge variant={selectedList === list.id ? "secondary" : "outline"}>
                        {list.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* List Actions */}
              <Card className="p-4">
                <h3 className="font-semibold mb-4">List Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share List
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Star className="w-4 h-4 mr-2" />
                    Export List
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search and Controls */}
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      placeholder="Search your favorites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={viewMode === "grid" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                    <Button variant="outline">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {selectedListData?.name} ({filteredRestaurants.length})
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Your curated collection of favorite restaurants
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Sort by: Recently Added
                  </Button>
                </div>
              </Card>

              {/* Empty State */}
              {filteredRestaurants.length === 0 && (
                <Card className="p-12 text-center">
                  <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No favorites yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Start exploring restaurants and save your favorites to see them here
                  </p>
                  <Button variant="hero">
                    Discover Restaurants
                  </Button>
                </Card>
              )}

              {/* Restaurants Grid/List */}
              {filteredRestaurants.length > 0 && (
                <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
                  {filteredRestaurants.map((restaurant) => (
                    <div key={restaurant.id} className="relative group">
                      {viewMode === "grid" ? (
                        <RestaurantCard restaurant={restaurant} />
                      ) : (
                        <Card className="hover:shadow-card transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center space-x-4">
                              <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                                    <p className="text-muted-foreground">{restaurant.cuisine}</p>
                                    <div className="flex items-center space-x-2 mt-1">
                                      <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                                        <span className="text-sm">{restaurant.rating}</span>
                                      </div>
                                      <span className="text-muted-foreground">•</span>
                                      <span className="text-sm text-muted-foreground">{restaurant.priceRange}</span>
                                      <span className="text-muted-foreground">•</span>
                                      <span className="text-sm text-muted-foreground">{restaurant.distance}</span>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <Badge variant={restaurant.isOpen ? "default" : "secondary"} className="mb-2">
                                      {restaurant.isOpen ? "Open" : "Closed"}
                                    </Badge>
                                    <p className="text-xs text-muted-foreground">
                                      Added {restaurant.addedDate}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {restaurant.lists.map((listId) => {
                                    const list = favoriteLists.find(l => l.id === listId);
                                    return list && !list.isDefault ? (
                                      <Badge key={listId} variant="outline" className="text-xs">
                                        {list.name}
                                      </Badge>
                                    ) : null;
                                  })}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )}
                      
                      {/* Quick Actions */}
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex space-x-1">
                          <Button variant="secondary" size="icon" className="w-8 h-8">
                            <Heart className="w-4 h-4 fill-primary text-primary" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
```

### src/pages/Profile.tsx
```typescript
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Star, 
  Heart, 
  MapPin, 
  Edit3, 
  Camera,
  Award,
  Calendar,
  Users
} from "lucide-react";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import momosImage from "@/assets/momos.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    bio: "Food enthusiast exploring the flavors of Nepal. Love trying new restaurants and sharing honest reviews!",
    location: "Kathmandu, Nepal",
    joinDate: "March 2023",
    preferences: ["Vegetarian", "Spicy Food", "Traditional Cuisine"],
    dietaryRestrictions: ["Vegetarian"]
  });

  const stats = {
    reviewsCount: 47,
    favoritesCount: 23,
    followersCount: 156,
    followingCount: 89,
    badgesCount: 5
  };

  const recentReviews = [
    {
      id: "1",
      restaurantName: "Himalayan Delights",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely amazing food! The dal bhat was perfectly cooked and the service was excellent.",
      image: dalBhatImage,
      helpfulCount: 12
    },
    {
      id: "2", 
      restaurantName: "Momo Palace",
      rating: 4,
      date: "1 week ago",
      comment: "Great momos and quick service. Perfect for a quick bite!",
      image: momosImage,
      helpfulCount: 8
    },
    {
      id: "3",
      restaurantName: "Heritage Kitchen",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best Newari food in the city. Authentic flavors and great ambiance.",
      image: restaurantImage,
      helpfulCount: 15
    }
  ];

  const favoriteRestaurants = [
    {
      id: "1",
      name: "Himalayan Delights",
      cuisine: "Traditional Nepali",
      rating: 4.8,
      image: dalBhatImage,
      priceRange: "₹₹"
    },
    {
      id: "2",
      name: "Momo Palace", 
      cuisine: "Tibetan • Nepali",
      rating: 4.6,
      image: momosImage,
      priceRange: "₹"
    },
    {
      id: "3",
      name: "Heritage Kitchen",
      cuisine: "Newari • Traditional", 
      rating: 4.9,
      image: restaurantImage,
      priceRange: "₹₹₹"
    }
  ];

  const badges = [
    { name: "Food Explorer", description: "Visited 20+ restaurants", icon: "🗺️" },
    { name: "Review Master", description: "Written 25+ reviews", icon: "⭐" },
    { name: "Local Expert", description: "Expert in Nepali cuisine", icon: "🏆" },
    { name: "Helpful Reviewer", description: "Reviews marked helpful 50+ times", icon: "👍" },
    { name: "Vegetarian Guru", description: "Expert in vegetarian options", icon: "🥬" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <Card className="mb-8 bg-gradient-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {profile.name.charAt(0)}
                  </div>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute -bottom-2 -right-2 w-8 h-8"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Joined {profile.joinDate}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{profile.bio}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stats.reviewsCount}</div>
                      <div className="text-sm text-muted-foreground">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stats.favoritesCount}</div>
                      <div className="text-sm text-muted-foreground">Favorites</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stats.followersCount}</div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stats.followingCount}</div>
                      <div className="text-sm text-muted-foreground">Following</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stats.badgesCount}</div>
                      <div className="text-sm text-muted-foreground">Badges</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reviews">My Reviews</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="badges">Badges</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">My Reviews ({stats.reviewsCount})</h2>
                <Button variant="hero">Write New Review</Button>
              </div>

              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <Card key={review.id} className="hover:shadow-card transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={review.image}
                          alt={review.restaurantName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{review.restaurantName}</h3>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'fill-nepali-gold text-nepali-gold' : 'text-muted-foreground'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-2">{review.comment}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              👍 {review.helpfulCount} people found this helpful
                            </div>
                            <div className="space-x-2">
                              <Button variant="ghost" size="sm">Edit</Button>
                              <Button variant="ghost" size="sm">Delete</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Favorite Restaurants ({stats.favoritesCount})</h2>
                <Button variant="outline">Manage Lists</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteRestaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                      >
                        <Heart className="w-4 h-4 fill-primary text-primary" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                      <p className="text-muted-foreground mb-2">{restaurant.cuisine}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{restaurant.priceRange}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="badges" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">My Badges ({stats.badgesCount})</h2>
                <p className="text-muted-foreground">Earn badges by exploring restaurants and sharing reviews!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {badges.map((badge, index) => (
                  <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow">
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{badge.name}</h3>
                    <p className="text-muted-foreground text-sm">{badge.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Profile Settings</h2>
                <p className="text-muted-foreground">Manage your account information and preferences</p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <CardTitle className="mb-4">Personal Information</CardTitle>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" value={profile.name} readOnly={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={profile.email} readOnly={!isEditing} />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" value={profile.location} readOnly={!isEditing} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" value={profile.bio} readOnly={!isEditing} />
                  </div>
                </Card>

                <Card className="p-6">
                  <CardTitle className="mb-4">Food Preferences</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Dietary Restrictions</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Nut-free"].map((restriction) => (
                          <Badge
                            key={restriction}
                            variant={profile.dietaryRestrictions.includes(restriction) ? "default" : "secondary"}
                            className="cursor-pointer"
                          >
                            {restriction}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label className="mb-2 block">Favorite Cuisines</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Nepali", "Indian", "Chinese", "Tibetan", "Italian", "Continental"].map((cuisine) => (
                          <Badge
                            key={cuisine}
                            variant={profile.preferences.includes(cuisine) ? "default" : "secondary"}
                            className="cursor-pointer"
                          >
                            {cuisine}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="flex space-x-4">
                  <Button variant="hero">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
```

## Note

This is part 2 of the complete Khauuu project codebase. Part 1 contains the configuration files, core source files, and setup. This part contains all the main page components.

To continue with the remaining components and files, please let me know if you need the components directory files (Navbar, Hero, Footer, RestaurantCard, etc.) and any other files from the project structure.