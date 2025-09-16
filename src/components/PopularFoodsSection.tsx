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