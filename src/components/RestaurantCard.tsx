import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, DollarSign, Heart, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShareModal from "@/components/ShareModal";

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    reviewCount: number;
    priceRange: string;
    distance: string;
    image: string;
    isOpen: boolean;
    deliveryTime: string;
    tags: string[];
  };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const handleCardClick = () => {
    navigate(`/restaurant/${restaurant.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowShareModal(true);
  };

  const handleViewMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/restaurant/${restaurant.id}`);
  };

  const shareItem = {
    id: restaurant.id,
    type: 'restaurant' as const,
    name: restaurant.name,
    image: restaurant.image,
    description: `${restaurant.cuisine} • ${restaurant.tags?.join(', ')}`,
    rating: restaurant.rating,
    price: restaurant.priceRange,
    location: restaurant.distance || 'Kathmandu',
  };

  return (
    <>
      <Card 
        className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-primary/10 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className={`bg-background/80 hover:bg-background ${isFavorite ? 'text-red-500' : ''}`}
              onClick={handleFavoriteClick}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
            </Button>
          </div>
          <div className="absolute bottom-3 left-3">
            <Badge variant={restaurant.isOpen ? "default" : "secondary"} className="bg-primary text-primary-foreground">
              {restaurant.isOpen ? "Open" : "Closed"}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-nepali-gold text-nepali-gold" />
              <span className="font-medium text-foreground">{restaurant.rating}</span>
              <span className="text-muted-foreground text-sm">({restaurant.reviewCount})</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-3">{restaurant.cuisine}</p>

          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-4 h-4" />
              <span>{restaurant.priceRange}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{restaurant.distance}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-4">
            {restaurant.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-primary"
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
            <Button 
              variant="outline" 
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              onClick={handleViewMenuClick}
            >
              View Menu
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        item={shareItem}
      />
    </>
  );
};

export default RestaurantCard;