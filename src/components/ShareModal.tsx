import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, X, Send, Star, MapPin, Clock, Copy, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ShareItem {
  id: string;
  type: 'restaurant' | 'food' | 'offer';
  name: string;
  image: string;
  description?: string;
  rating?: number;
  price?: string;
  location?: string;
  discount?: string;
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ShareItem | null;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, item }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [showExternalShare, setShowExternalShare] = useState(false);
  const { toast } = useToast();

  const users = [
    { id: "1", name: "Priya Sharma", username: "@priya.foodie", avatar: "/placeholder.svg", isFollowing: true },
    { id: "2", name: "Raj Thapa", username: "@raj.eats", avatar: "/placeholder.svg", isFollowing: true },
    { id: "3", name: "Maya Gurung", username: "@maya.kitchen", avatar: "/placeholder.svg", isFollowing: false },
    { id: "4", name: "Food Lovers Group", username: "12 members", avatar: "/placeholder.svg", isGroup: true },
    { id: "5", name: "Suman Khadka", username: "@suman.tastes", avatar: "/placeholder.svg", isFollowing: true },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserSelection = (userId: string) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleShare = () => {
    if (selectedUsers.length > 0) {
      // Handle sharing logic here
      console.log("Sharing to:", selectedUsers, "Message:", message);
      onClose();
      setSelectedUsers([]);
      setMessage("");
    }
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/offer/${item?.id}`;
    navigator.clipboard.writeText(shareUrl);
    toast({
      title: "Link Copied!",
      description: "Share link has been copied to clipboard",
    });
  };

  const handleExternalShare = (platform: string) => {
    const shareUrl = `${window.location.origin}/offer/${item?.id}`;
    const shareText = `Check out this amazing offer: ${item?.name}!`;
    
    let url = "";
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        // Instagram doesn't support direct URL sharing, so copy to clipboard
        navigator.clipboard.writeText(shareUrl);
        toast({
          title: "Link Copied!",
          description: "Paste this link in your Instagram story or post",
        });
        return;
      case "viber":
        url = `viber://forward?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
        break;
    }
    
    if (url) {
      window.open(url, "_blank");
    }
  };

  const externalPlatforms = [
    { id: "copy", name: "Copy Link", icon: "📋", color: "bg-gray-500" },
    { id: "whatsapp", name: "WhatsApp", icon: "📱", color: "bg-green-500" },
    { id: "facebook", name: "Facebook", icon: "📘", color: "bg-blue-600" },
    { id: "instagram", name: "Instagram", icon: "📷", color: "bg-pink-500" },
    { id: "viber", name: "Viber", icon: "💜", color: "bg-purple-500" },
    { id: "telegram", name: "Telegram", icon: "✈️", color: "bg-blue-400" },
  ];

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 gap-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-foreground">Share</h3>
            <div className="flex items-center space-x-1">
              <Button
                variant={!showExternalShare ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowExternalShare(false)}
                className="text-xs"
              >
                Friends
              </Button>
              <Button
                variant={showExternalShare ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowExternalShare(true)}
                className="text-xs"
              >
                <Share2 className="w-3 h-3 mr-1" />
                External
              </Button>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Share Item Preview */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3 bg-muted rounded-lg p-3">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground truncate">{item.name}</h4>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                {item.rating && (
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                )}
                {item.price && <span>{item.price}</span>}
                {item.discount && (
                  <Badge variant="destructive" className="text-xs">
                    {item.discount}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {!showExternalShare ? (
          <>
            {/* Search Users */}
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search people..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 bg-background"
                />
              </div>
            </div>

            {/* Users List */}
            <div className="max-h-60 overflow-y-auto">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 hover:bg-muted/50 cursor-pointer"
                  onClick={() => toggleUserSelection(user.id)}
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.username}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!user.isGroup && !user.isFollowing && (
                      <Badge variant="secondary" className="text-xs">Follow</Badge>
                    )}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedUsers.includes(user.id)
                        ? 'bg-primary border-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedUsers.includes(user.id) && (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <Input
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-3"
              />
              <Button 
                onClick={handleShare}
                disabled={selectedUsers.length === 0}
                className="w-full"
              >
                <Send className="w-4 h-4 mr-2" />
                Send to {selectedUsers.length} {selectedUsers.length === 1 ? 'person' : 'people'}
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* External Share Options */}
            <div className="p-4">
              <h4 className="font-medium text-foreground mb-4">Share Externally</h4>
              <div className="grid grid-cols-2 gap-3">
                {externalPlatforms.map((platform) => (
                  <Button
                    key={platform.id}
                    variant="outline"
                    className="flex items-center space-x-2 p-4 h-auto"
                    onClick={() => platform.id === "copy" ? handleCopyLink() : handleExternalShare(platform.id)}
                  >
                    <span className="text-lg">{platform.icon}</span>
                    <span className="text-sm font-medium">{platform.name}</span>
                  </Button>
                ))}
              </div>
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Share this amazing {item?.type} with your friends and family!
                </p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;