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