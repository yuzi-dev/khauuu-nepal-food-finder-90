import RestaurantCard from "./RestaurantCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import momosImage from "@/assets/momos.jpg";
import dalBhatImage from "@/assets/dal-bhat.jpg";
import restaurantImage from "@/assets/restaurant-interior.jpg";

const FeaturedSection = () => {
  const featuredRestaurants = [
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
    }
  ];

  const popularDishes = [
    { name: "Dal Bhat", restaurants: 120, image: dalBhatImage },
    { name: "Momos", restaurants: 95, image: momosImage },
    { name: "Newari Khaja", restaurants: 45, image: restaurantImage },
  ];

  return (
    <section className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Restaurants */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Restaurants</h2>
              <p className="text-muted-foreground">Discover the best local favorites in your area</p>
            </div>
            <Button variant="hero">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>

        {/* Popular Dishes */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">Popular Nepali Dishes</h2>
            <p className="text-muted-foreground">Explore authentic flavors loved by locals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDishes.map((dish, index) => (
              <div key={index} className="group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden rounded-xl shadow-card group-hover:shadow-warm transition-all duration-300">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <h3 className="text-xl font-bold mb-1">{dish.name}</h3>
                    <p className="text-primary-foreground/80">{dish.restaurants} restaurants</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;