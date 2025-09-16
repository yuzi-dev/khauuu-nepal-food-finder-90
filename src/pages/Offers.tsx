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