import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Users, UserPlus, UserCheck } from "lucide-react";

const SearchUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());

  // Mock user data
  const users = [
    {
      id: "1",
      name: "Priya Sharma",
      username: "@priya_foodie",
      bio: "Food enthusiast exploring Kathmandu's hidden gems 🍜",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b788?w=150&h=150&fit=crop&crop=face",
      followers: 342,
      following: 128,
      reviews: 45,
      verified: true
    },
    {
      id: "2", 
      name: "Rajesh Thapa",
      username: "@rajesh_eats",
      bio: "Traditional Nepali cuisine lover | Food blogger",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      followers: 189,
      following: 94,
      reviews: 23,
      verified: false
    },
    {
      id: "3",
      name: "Maya Gurung", 
      username: "@maya_tastes",
      bio: "Exploring street food culture in Nepal 🥟",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      followers: 567,
      following: 201,
      reviews: 78,
      verified: true
    },
    {
      id: "4",
      name: "Bikash Shrestha",
      username: "@bikash_reviews",
      bio: "Restaurant reviewer | Momo connoisseur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      followers: 123,
      following: 67,
      reviews: 32,
      verified: false
    },
    {
      id: "5",
      name: "Sita Rai",
      username: "@sita_foodie",
      bio: "Authentic Nepali food advocate | Recipe creator",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      followers: 445,
      following: 156,
      reviews: 67,
      verified: true
    }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFollow = (userId: string) => {
    const newFollowed = new Set(followedUsers);
    if (newFollowed.has(userId)) {
      newFollowed.delete(userId);
    } else {
      newFollowed.add(userId);
    }
    setFollowedUsers(newFollowed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Find Food Lovers</h1>
            <p className="text-muted-foreground">Connect with fellow food enthusiasts in your area</p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search users by name, username, or interests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            {filteredUsers.length === 0 ? (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No users found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms</p>
              </div>
            ) : (
              filteredUsers.map((user) => (
                <Card key={user.id} className="hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      {/* User Info */}
                      <div className="flex items-start space-x-4 flex-1">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-foreground">{user.name}</h3>
                            {user.verified && (
                              <Badge variant="default" className="text-xs">Verified</Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{user.username}</p>
                          <p className="text-foreground mb-3">{user.bio}</p>
                          
                          {/* Stats */}
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <div>
                              <span className="font-semibold text-foreground">{user.followers}</span> followers
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">{user.following}</span> following
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">{user.reviews}</span> reviews
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Follow Button */}
                      <div className="ml-4">
                        <Button
                          variant={followedUsers.has(user.id) ? "outline" : "hero"}
                          onClick={() => handleFollow(user.id)}
                          className="min-w-[100px]"
                        >
                          {followedUsers.has(user.id) ? (
                            <>
                              <UserCheck className="w-4 h-4 mr-2" />
                              Following
                            </>
                          ) : (
                            <>
                              <UserPlus className="w-4 h-4 mr-2" />
                              Follow
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchUsers;