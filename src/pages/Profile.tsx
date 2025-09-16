import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Grid3X3, 
  Bookmark, 
  UserPlus, 
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Share,
  MapPin,
  Calendar,
  Link as LinkIcon,
  Camera,
  Plus
} from "lucide-react";

const Profile = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  // Sample data - replace with real data
  const userProfile = {
    username: "foodie_priya",
    fullName: "Priya Sharma",
    bio: "🍛 Food enthusiast | 📍 Kathmandu, Nepal\n🥟 Momo connoisseur | 🌶️ Spice lover\n📧 Contact: priya.food@email.com",
    website: "https://priyafoodjourney.com",
    location: "Kathmandu, Nepal",
    joinDate: "March 2023",
    isVerified: true,
    posts: 127,
    followers: 2453,
    following: 1289,
    profileImage: "/placeholder.svg"
  };

  const posts = [
    { id: 1, image: "/placeholder.svg", likes: 234, comments: 45, type: "photo" },
    { id: 2, image: "/placeholder.svg", likes: 189, comments: 23, type: "photo" },
    { id: 3, image: "/placeholder.svg", likes: 345, comments: 67, type: "photo" },
    { id: 4, image: "/placeholder.svg", likes: 156, comments: 34, type: "photo" },
    { id: 5, image: "/placeholder.svg", likes: 278, comments: 56, type: "photo" },
    { id: 6, image: "/placeholder.svg", likes: 167, comments: 29, type: "photo" },
    { id: 7, image: "/placeholder.svg", likes: 234, comments: 45, type: "photo" },
    { id: 8, image: "/placeholder.svg", likes: 189, comments: 23, type: "photo" },
    { id: 9, image: "/placeholder.svg", likes: 345, comments: 67, type: "photo" },
  ];

  const savedPosts = [
    { id: 1, image: "/placeholder.svg", title: "Best Momos in Kathmandu" },
    { id: 2, image: "/placeholder.svg", title: "Traditional Dal Bhat Recipe" },
    { id: 3, image: "/placeholder.svg", title: "Street Food Guide" },
  ];

  const highlights = [
    { id: 1, title: "Momos", image: "/placeholder.svg" },
    { id: 2, title: "Dal Bhat", image: "/placeholder.svg" },
    { id: 3, title: "Street Food", image: "/placeholder.svg" },
    { id: 4, title: "Restaurants", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-2 ring-border">
                  <AvatarImage src={userProfile.profileImage} />
                  <AvatarFallback className="text-2xl">{userProfile.fullName[0]}</AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute bottom-2 right-2 rounded-full w-8 h-8 bg-primary"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              {/* Username and Actions */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center gap-3">
                  <h1 className="text-xl md:text-2xl font-normal text-foreground">
                    {userProfile.username}
                  </h1>
                  {userProfile.isVerified && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" className="px-6">
                    Edit profile
                  </Button>
                  <Button variant="outline" className="px-6">
                    Share profile
                  </Button>
                  <Button variant="outline" size="icon">
                    <UserPlus className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-8">
                <div className="text-center md:text-left">
                  <span className="font-semibold text-foreground">{userProfile.posts}</span>
                  <span className="text-foreground ml-1">posts</span>
                </div>
                <div className="text-center md:text-left cursor-pointer hover:opacity-70">
                  <span className="font-semibold text-foreground">{userProfile.followers.toLocaleString()}</span>
                  <span className="text-foreground ml-1">followers</span>
                </div>
                <div className="text-center md:text-left cursor-pointer hover:opacity-70">
                  <span className="font-semibold text-foreground">{userProfile.following.toLocaleString()}</span>
                  <span className="text-foreground ml-1">following</span>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-2">
                <h2 className="font-semibold text-foreground">{userProfile.fullName}</h2>
                <div className="text-sm text-foreground whitespace-pre-line">
                  {userProfile.bio}
                </div>
                {userProfile.website && (
                  <div className="flex items-center gap-2 text-sm">
                    <LinkIcon className="w-4 h-4 text-muted-foreground" />
                    <a 
                      href={userProfile.website} 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {userProfile.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{userProfile.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {userProfile.joinDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Highlights */}
          <div className="mt-8">
            <div className="flex gap-4 overflow-x-auto pb-2">
              {/* Add New Highlight */}
              <div className="flex flex-col items-center gap-2 min-w-0">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center cursor-pointer hover:bg-muted/50">
                  <Plus className="w-6 h-6 text-muted-foreground" />
                </div>
                <span className="text-xs text-muted-foreground">New</span>
              </div>
              
              {highlights.map((highlight) => (
                <div key={highlight.id} className="flex flex-col items-center gap-2 min-w-0">
                  <div className="w-16 h-16 rounded-full ring-2 ring-border overflow-hidden cursor-pointer">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs text-foreground truncate max-w-[64px]">
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        {/* Content Tabs */}
        <div className="max-w-4xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-center bg-transparent border-0 h-auto p-0">
              <TabsTrigger 
                value="posts" 
                className="flex items-center gap-2 px-6 py-4 data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none bg-transparent"
              >
                <Grid3X3 className="w-4 h-4" />
                <span className="hidden md:inline">POSTS</span>
              </TabsTrigger>
              <TabsTrigger 
                value="saved" 
                className="flex items-center gap-2 px-6 py-4 data-[state=active]:border-t-2 data-[state=active]:border-primary rounded-none bg-transparent"
              >
                <Bookmark className="w-4 h-4" />
                <span className="hidden md:inline">SAVED</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="posts" className="mt-0">
              {posts.length > 0 ? (
                <div className="grid grid-cols-3 gap-1 md:gap-4">
                  {posts.map((post) => (
                    <div 
                      key={post.id} 
                      className="aspect-square relative group cursor-pointer overflow-hidden"
                    >
                      <img 
                        src={post.image} 
                        alt={`Post ${post.id}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center gap-6 text-white">
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 fill-white" />
                            <span className="font-semibold">{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-5 h-5 fill-white" />
                            <span className="font-semibold">{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20">
                  <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Share Photos</h3>
                  <p className="text-muted-foreground text-center max-w-sm">
                    When you share photos, they will appear on your profile.
                  </p>
                  <Button className="mt-4">Share your first photo</Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved" className="mt-0">
              {savedPosts.length > 0 ? (
                <div className="grid grid-cols-3 gap-1 md:gap-4">
                  {savedPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="aspect-square relative group cursor-pointer overflow-hidden"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Bookmark className="w-6 h-6 text-white fill-white" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20">
                  <Bookmark className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Save</h3>
                  <p className="text-muted-foreground text-center max-w-sm">
                    Save photos and videos that you want to see again.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;