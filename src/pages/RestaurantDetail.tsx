import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import ShareModal from "@/components/ShareModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  Heart, 
  Share2,
  DollarSign,
  Wifi,
  Car,
  CreditCard,
  Users,
  Navigation
} from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { getRestaurantCoordinates, calculateDistance, formatDistance } from "@/utils/geolocation";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import momosImage from "@/assets/momos.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { coordinates: userLocation } = useGeolocation();
  const { toast } = useToast();

  // Mock restaurant data - in real app this would come from API
  const restaurant = {
    id: "1",
    name: "Himalayan Delights",
    cuisine: "Traditional Nepali",
    rating: 4.8,
    reviewCount: 245,
    priceRange: "₹₹",
    address: "Thamel, Kathmandu, Nepal",
    phone: "+977-1-4444444",
    website: "www.himalayandelights.com.np",
    isOpen: true,
    openingHours: "11:00 AM - 10:00 PM",
    description: "Experience authentic Nepali cuisine in the heart of Thamel. Our traditional recipes have been passed down through generations, offering you the true taste of Nepal.",
    images: [dalBhatImage, restaurantImage, momosImage],
    amenities: ["WiFi", "Parking", "Card Payment", "Family Friendly"],
    specialties: ["Dal Bhat", "Newari Khaja Set", "Traditional Thali"],
    menu: [
      {
        category: "Traditional Sets",
        items: [
          { name: "Dal Bhat Set", price: "₹450", description: "Traditional rice and lentils with curry and vegetables", image: dalBhatImage },
          { name: "Newari Khaja Set", price: "₹650", description: "Traditional Newari platter with various local delicacies", image: restaurantImage },
        ]
      },
      {
        category: "Momos & Snacks",
        items: [
          { name: "Chicken Momos", price: "₹180", description: "Steamed dumplings filled with spiced chicken", image: momosImage },
          { name: "Vegetable Momos", price: "₹150", description: "Steamed dumplings with mixed vegetables", image: momosImage },
        ]
      }
    ]
  };

  // Get restaurant coordinates and calculate distance
  const restaurantCoords = getRestaurantCoordinates(restaurant.id);
  const distance = userLocation && restaurantCoords 
    ? calculateDistance(userLocation, restaurantCoords)
    : null;

  // Prepare map markers
  const mapMarkers = [];
  if (restaurantCoords) {
    mapMarkers.push({
      position: [restaurantCoords.latitude, restaurantCoords.longitude] as [number, number],
      title: restaurant.name,
      description: restaurant.address,
      type: 'restaurant' as const
    });
  }
  if (userLocation) {
    mapMarkers.push({
      position: [userLocation.latitude, userLocation.longitude] as [number, number],
      title: "Your Location",
      description: "You are here",
      type: 'user' as const
    });
  }

  const reviews = [
    {
      id: "1",
      userName: "Priya Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely amazing food! The dal bhat was perfectly cooked and the service was excellent. Highly recommend this place for authentic Nepali cuisine.",
      helpfulCount: 12
    },
    {
      id: "2",
      userName: "John Smith",
      rating: 4,
      date: "1 week ago", 
      comment: "Great atmosphere and delicious food. The momos were fantastic. Only reason for 4 stars is the wait time was a bit long.",
      helpfulCount: 8
    },
    {
      id: "3",
      userName: "Sita Rai",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best traditional food in Thamel! The staff is very friendly and the portions are generous. Will definitely come back.",
      helpfulCount: 15
    }
  ];

  const handleSave = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Restaurant Removed" : "Restaurant Saved!",
      description: isFavorite 
        ? "Restaurant removed from your favorites" 
        : "Restaurant saved to your favorites",
    });
  };

  const handleShare = () => {
    setShareModalOpen(true);
  };

  const shareItem = {
    id: restaurant.id,
    type: 'restaurant' as const,
    name: restaurant.name,
    image: restaurant.images[0],
    description: `${restaurant.cuisine} • ${restaurant.address}`,
    rating: restaurant.rating,
    price: restaurant.priceRange,
    location: restaurant.address,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8 rounded-xl overflow-hidden">
            <div className="lg:col-span-2">
              <img
                src={restaurant.images[0]}
                alt={restaurant.name}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {restaurant.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${restaurant.name} ${index + 2}`}
                  className="w-full h-32 lg:h-[11.5rem] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Restaurant Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{restaurant.name}</h1>
                    <p className="text-lg text-muted-foreground mb-2">{restaurant.cuisine}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-nepali-gold text-nepali-gold" />
                        <span className="font-semibold">{restaurant.rating}</span>
                        <span className="text-muted-foreground">({restaurant.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{restaurant.priceRange}</span>
                      </div>
                      {distance && (
                        <div className="flex items-center space-x-1">
                          <Navigation className="w-4 h-4" />
                          <span>{formatDistance(distance)} away</span>
                        </div>
                      )}
                      <Badge variant={restaurant.isOpen ? "default" : "secondary"}>
                        {restaurant.isOpen ? "Open" : "Closed"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant={isFavorite ? "default" : "outline"}
                      size="icon"
                      onClick={handleSave}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{restaurant.description}</p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {restaurant.amenities.map((amenity, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                      {amenity === "WiFi" && <Wifi className="w-3 h-3" />}
                      {amenity === "Parking" && <Car className="w-3 h-3" />}
                      {amenity === "Card Payment" && <CreditCard className="w-3 h-3" />}
                      {amenity === "Family Friendly" && <Users className="w-3 h-3" />}
                      <span>{amenity}</span>
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="menu" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>

                <TabsContent value="menu" className="space-y-6">
                  {restaurant.menu.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="hover:shadow-card transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg mb-1">{item.name}</h4>
                                  <p className="text-muted-foreground mb-2">{item.description}</p>
                                  <p className="text-xl font-bold text-primary">{item.price}</p>
                                </div>
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-20 h-20 object-cover rounded-lg ml-4"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <Button variant="hero">Write a Review</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <Card key={review.id} className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold">{review.userName}</h4>
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
                        </div>
                        <p className="text-muted-foreground mb-2">{review.comment}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Button variant="ghost" size="sm">
                            👍 Helpful ({review.helpfulCount})
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="location" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Location & Directions</h3>
                      {distance && (
                        <Badge variant="outline" className="text-base px-3 py-1">
                          <Navigation className="w-4 h-4 mr-1" />
                          {formatDistance(distance)} away
                        </Badge>
                      )}
                    </div>
                    
                    {restaurantCoords && (
                      <Map
                        center={[restaurantCoords.latitude, restaurantCoords.longitude]}
                        zoom={15}
                        markers={mapMarkers}
                        height="400px"
                        className="w-full"
                      />
                    )}
                    
                    <Card className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <div>
                              <h4 className="font-semibold">{restaurant.name}</h4>
                              <p className="text-muted-foreground">{restaurant.address}</p>
                            </div>
                          </div>
                          {distance && (
                            <p className="text-sm text-muted-foreground ml-7">
                              Approximately {formatDistance(distance)} from your location
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button size="sm" variant="hero">
                            <Navigation className="w-4 h-4 mr-1" />
                            Get Directions
                          </Button>
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="info" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span>{restaurant.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-primary" />
                          <span>{restaurant.website}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{restaurant.address}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Opening Hours</h4>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{restaurant.openingHours}</span>
                      </div>
                    </Card>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="hero" className="w-full">
                    <a href={`https://maps.google.com/?q=${restaurant.address}`} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Get Directions</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4" />
                    Call Restaurant
                  </Button>
                  <Button variant="outline" className="w-full">
                    Share with Friends
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Similar Restaurants</h3>
                <div className="space-y-3">
                  {[
                    { name: "Momo Palace", cuisine: "Tibetan • Nepali", rating: 4.6 },
                    { name: "Heritage Kitchen", cuisine: "Newari • Traditional", rating: 4.9 },
                    { name: "Yak & Yeti", cuisine: "International • Nepali", rating: 4.7 }
                  ].map((similar, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div>
                        <h4 className="font-medium">{similar.name}</h4>
                        <p className="text-sm text-muted-foreground">{similar.cuisine}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                        <span className="text-sm font-medium">{similar.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        item={shareItem}
      />
    </div>
  );
};

export default RestaurantDetail;