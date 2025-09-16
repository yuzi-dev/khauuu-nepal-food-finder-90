import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShareModal from "@/components/ShareModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Star, 
  MapPin, 
  Clock, 
  Heart, 
  Share2,
  DollarSign,
  ChefHat,
  Utensils
} from "lucide-react";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import momosImage from "@/assets/momos.jpg";

const FoodDetail = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const { toast } = useToast();

  // Mock food data - in real app this would come from API
  const food = {
    id: "1",
    name: "Traditional Dal Bhat",
    category: "Traditional Nepali",
    rating: 4.9,
    reviewCount: 156,
    priceRange: "₹350 - ₹500",
    description: "Nepal's national dish featuring rice (bhat) served with lentil soup (dal), vegetable curry, pickles, and sometimes meat curry. A complete, balanced meal that represents the heart of Nepali cuisine.",
    images: [dalBhatImage, momosImage],
    origin: "Nepal",
    preparationTime: "45-60 minutes",
    difficulty: "Medium",
    ingredients: ["Basmati Rice", "Mixed Lentils", "Seasonal Vegetables", "Spices", "Ghee", "Pickles"],
    nutritionalInfo: {
      calories: "450-600 per serving",
      protein: "High",
      carbs: "High", 
      fiber: "High"
    },
    bestPlaces: [
      { name: "Himalayan Delights", location: "Thamel", rating: 4.8 },
      { name: "Traditional Kitchen", location: "Patan", rating: 4.7 },
      { name: "Heritage Restaurant", location: "Bhaktapur", rating: 4.9 }
    ],
    culturalSignificance: "Dal Bhat is more than just a meal in Nepal - it's a cultural institution. Eaten twice daily by most Nepalis, this dish represents the philosophy of balanced nutrition and is deeply connected to the agricultural traditions of the region.",
    variations: [
      "Vegetarian Dal Bhat",
      "Dal Bhat with Chicken Curry", 
      "Newari Style Dal Bhat",
      "Hill Region Dal Bhat"
    ]
  };

  const handleSave = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Food Removed" : "Food Saved!",
      description: isFavorite 
        ? "Food removed from your favorites" 
        : "Food saved to your favorites",
    });
  };

  const handleShare = () => {
    setShareModalOpen(true);
  };

  const shareItem = {
    id: food.id,
    type: 'food' as const,
    name: food.name,
    image: food.images[0],
    description: food.description,
    rating: food.rating,
    price: food.priceRange,
  };

  const reviews = [
    {
      id: "1",
      userName: "Ramesh Thapa",
      rating: 5,
      date: "3 days ago",
      comment: "Absolutely authentic Dal Bhat! The combination of flavors reminds me of my grandmother's cooking. Perfect balance of spices and textures.",
      helpfulCount: 18,
      location: "Tried at Himalayan Delights"
    },
    {
      id: "2", 
      userName: "Sarah Johnson",
      rating: 5,
      date: "1 week ago",
      comment: "As a tourist, this was my introduction to Nepali cuisine. The restaurant explained each component beautifully. Such a wholesome and satisfying meal!",
      helpfulCount: 12,
      location: "Tried at Traditional Kitchen"
    },
    {
      id: "3",
      userName: "Bikash Gurung", 
      rating: 4,
      date: "2 weeks ago",
      comment: "Good traditional preparation, though I prefer it with more spice. The dal was perfectly cooked and the vegetables were fresh.",
      helpfulCount: 8,
      location: "Tried at Heritage Restaurant"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 rounded-xl overflow-hidden">
            <div>
              <img
                src={food.images[0]}
                alt={food.name}
                className="w-full h-64 lg:h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src={food.images[1]}
                alt={`${food.name} preparation`}
                className="w-full h-44 lg:h-44 object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{food.preparationTime}</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <ChefHat className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">{food.difficulty}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Food Header */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{food.name}</h1>
                    <p className="text-lg text-muted-foreground mb-2">{food.category}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 fill-nepali-gold text-nepali-gold" />
                        <span className="font-semibold">{food.rating}</span>
                        <span className="text-muted-foreground">({food.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{food.priceRange}</span>
                      </div>
                      <Badge variant="secondary">
                        <MapPin className="w-3 h-3 mr-1" />
                        {food.origin}
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

                <p className="text-muted-foreground mb-6">{food.description}</p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="info" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="info">Food Info</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Utensils className="w-4 h-4 mr-2 text-primary" />
                        Main Ingredients
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {food.ingredients.map((ingredient, index) => (
                          <Badge key={index} variant="outline">{ingredient}</Badge>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h4 className="font-semibold mb-3">Nutritional Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Calories:</span>
                          <span className="font-medium">{food.nutritionalInfo.calories}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Protein:</span>
                          <span className="font-medium">{food.nutritionalInfo.protein}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carbs:</span>
                          <span className="font-medium">{food.nutritionalInfo.carbs}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiber:</span>
                          <span className="font-medium">{food.nutritionalInfo.fiber}</span>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Cultural Significance</h4>
                    <p className="text-muted-foreground">{food.culturalSignificance}</p>
                  </Card>

                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Popular Variations</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {food.variations.map((variation, index) => (
                        <div key={index} className="flex items-center space-x-2 p-2 bg-muted/30 rounded-lg">
                          <ChefHat className="w-4 h-4 text-primary" />
                          <span className="text-sm">{variation}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Food Reviews</h3>
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
                            <p className="text-xs text-primary mt-1">{review.location}</p>
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
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Best Places to Try</h3>
                <div className="space-y-3">
                  {food.bestPlaces.map((place, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div>
                        <h4 className="font-medium">{place.name}</h4>
                        <p className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {place.location}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
                        <span className="text-sm font-medium">{place.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">Similar Foods</h3>
                <div className="space-y-3">
                  {[
                    { name: "Newari Khaja Set", category: "Traditional", rating: 4.7 },
                    { name: "Thukpa", category: "Tibetan", rating: 4.5 },
                    { name: "Sel Roti", category: "Traditional Sweet", rating: 4.6 }
                  ].map((similar, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                      <div>
                        <h4 className="font-medium">{similar.name}</h4>
                        <p className="text-sm text-muted-foreground">{similar.category}</p>
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

export default FoodDetail;