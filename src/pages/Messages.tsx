import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import SharedContent from "@/components/SharedContent";
import { 
  Search, 
  Send, 
  MessageSquare, 
  Phone, 
  Video,
  MoreVertical,
  Smile,
  Paperclip,
  Settings,
  Camera,
  Heart,
  Info,
  Plus,
  Edit3
} from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>("1");
  const [messageText, setMessageText] = useState("");
  const [showMessageRequests, setShowMessageRequests] = useState(false);

  const conversations = [
    {
      id: "1",
      name: "Priya Sharma",
      lastMessage: "The dal bhat was amazing! 🍛",
      timestamp: "2m",
      unreadCount: 0,
      avatar: "/placeholder.svg",
      isGroup: false,
      isOnline: true,
      verified: true
    },
    {
      id: "2", 
      name: "Food Lovers Group",
      lastMessage: "Anyone tried the new momo place?",
      timestamp: "5m",
      unreadCount: 3,
      avatar: "/placeholder.svg",
      isGroup: true,
      members: 12,
      isOnline: false
    },
    {
      id: "3",
      name: "Raj Thapa",
      lastMessage: "Want to try that Newari place tomorrow?",
      timestamp: "1h",
      unreadCount: 0,
      avatar: "/placeholder.svg",
      isGroup: false,
      isOnline: false
    },
    {
      id: "4",
      name: "Restaurant Reviews",
      lastMessage: "New review posted for Heritage Kitchen",
      timestamp: "2h", 
      unreadCount: 1,
      avatar: "/placeholder.svg",
      isGroup: true,
      members: 45,
      isOnline: false
    }
  ];

  const messageRequests = [
    {
      id: "req1",
      name: "Suman Khadka",
      lastMessage: "Hi! I saw your review of Bhojan Griha...",
      timestamp: "1d",
      avatar: "/placeholder.svg"
    },
    {
      id: "req2",
      name: "Maya Gurung",
      lastMessage: "Would love to connect and share food experiences!",
      timestamp: "2d",
      avatar: "/placeholder.svg"
    }
  ];

  const messages = [
    {
      id: "1",
      sender: "Priya Sharma",
      content: "Hey! Have you tried the new momo place in Thamel?",
      timestamp: "10:30 AM",
      isOwn: false,
      avatar: "/placeholder.svg"
    },
    {
      id: "2", 
      sender: "You",
      content: "Not yet! Is it good?",
      timestamp: "10:32 AM",
      isOwn: true,
      avatar: "/placeholder.svg"
    },
    {
      id: "3",
      sender: "Priya Sharma", 
      content: "Amazing! Best momos I've had in months. The jhol is incredible 🔥",
      timestamp: "10:33 AM",
      isOwn: false,
      avatar: "/placeholder.svg"
    },
    {
      id: "4",
      sender: "Priya Sharma",
      content: "",
      timestamp: "10:34 AM",
      isOwn: false,
      avatar: "/placeholder.svg",
      type: "shared",
      sharedContent: {
        type: "restaurant" as const,
        item: {
          id: "1",
          name: "Himalayan Momo Corner",
          image: "/api/placeholder/400/300",
          description: "Authentic Tibetan momos with amazing jhol. Best in Thamel!",
          rating: 4.8,
          reviewCount: 156,
          cuisine: "Tibetan • Nepali",
          price: "₹₹",
          location: "Thamel",
          deliveryTime: "20-30 min"
        },
        message: "This is the place! You have to try their steam momos 🥟"
      }
    },
    {
      id: "5",
      sender: "You",
      content: "Looks amazing! I'll definitely check it out this weekend",
      timestamp: "10:35 AM", 
      isOwn: true,
      avatar: "/placeholder.svg"
    },
    {
      id: "6",
      sender: "You",
      content: "",
      timestamp: "10:36 AM",
      isOwn: true,
      avatar: "/placeholder.svg",
      type: "shared",
      sharedContent: {
        type: "offer" as const,
        item: {
          id: "2",
          name: "50% Off on All Desserts",
          image: "/api/placeholder/400/300",
          description: "Limited time offer on all traditional Nepali desserts",
          discount: "50% OFF",
          price: "₹125",
          originalPrice: "₹250",
          location: "Heritage Kitchen"
        },
        message: "Check this out! We could use this offer when we go"
      }
    }
  ];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Handle message sending logic here
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Instagram-like layout */}
      <div className="flex h-screen pt-16">
        {/* Left Sidebar - Chat List */}
        <div className="w-full lg:w-[400px] border-r border-border bg-card">
          {/* Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold text-foreground">Username</h1>
              <Button variant="ghost" size="icon">
                <Edit3 className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search"
                className="pl-9 bg-muted border-0 rounded-lg"
              />
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="px-4 py-2 border-b border-border">
            <div className="flex space-x-4">
              <Button 
                variant={!showMessageRequests ? "default" : "ghost"} 
                size="sm"
                onClick={() => setShowMessageRequests(false)}
                className="px-4"
              >
                Primary
              </Button>
              <Button 
                variant={showMessageRequests ? "default" : "ghost"} 
                size="sm"
                onClick={() => setShowMessageRequests(true)}
                className="px-4"
              >
                Requests
                {messageRequests.length > 0 && (
                  <Badge variant="destructive" className="ml-2 px-1.5 py-0.5 text-xs">
                    {messageRequests.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          {/* Chat List */}
          <div className="overflow-y-auto h-full">
            {!showMessageRequests ? (
              // Primary conversations
              conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-3 hover:bg-muted/50 cursor-pointer transition-colors ${
                    selectedChat === conv.id ? 'bg-muted' : ''
                  }`}
                  onClick={() => setSelectedChat(conv.id)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback className="text-lg">{conv.name[0]}</AvatarFallback>
                      </Avatar>
                      {!conv.isGroup && conv.isOnline && (
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <p className="font-medium text-foreground truncate">
                            {conv.name}
                          </p>
                          {conv.verified && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">
                            {conv.timestamp}
                          </span>
                          {conv.unreadCount > 0 && (
                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-xs text-primary-foreground">
                                {conv.unreadCount}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground truncate mt-1">
                        {conv.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Message requests
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-4">
                  These people want to message you
                </p>
                {messageRequests.map((req) => (
                  <div key={req.id} className="p-3 hover:bg-muted/50 cursor-pointer transition-colors rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={req.avatar} />
                        <AvatarFallback>{req.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-foreground">
                            {req.name}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {req.timestamp}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {req.lastMessage}
                        </p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="default" className="px-4">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline" className="px-4">
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Chat Area */}
        <div className="flex-1 flex flex-col bg-background">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border bg-card">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">Priya Sharma</h3>
                      <p className="text-sm text-muted-foreground">Active now</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Info className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-[70%] ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      {!message.isOwn && (
                        <Avatar className="w-7 h-7">
                          <AvatarImage src={message.avatar} />
                          <AvatarFallback className="text-xs">{message.sender[0]}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`group relative`}>
                        {message.type === "shared" && message.sharedContent ? (
                          <div className="space-y-2">
                            {message.sharedContent.message && (
                              <div className={`rounded-2xl px-4 py-2 ${
                                message.isOwn 
                                  ? 'bg-primary text-primary-foreground' 
                                  : 'bg-muted text-foreground'
                              }`}>
                                <p className="text-sm leading-relaxed">{message.sharedContent.message}</p>
                              </div>
                            )}
                            <SharedContent
                              type={message.sharedContent.type}
                              item={message.sharedContent.item}
                              sharedBy={message.sender}
                            />
                          </div>
                        ) : (
                          <div className={`rounded-2xl px-4 py-2 max-w-sm ${
                            message.isOwn 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-foreground'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </div>
                        )}
                        {/* Reaction and timestamp on hover */}
                        <div className="absolute -bottom-6 left-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Heart className="w-3 h-3" />
                            </Button>
                            <span className="text-xs text-muted-foreground">
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-border bg-card">
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Plus className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Camera className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="rounded-full border-border bg-muted px-4 py-2 pr-12"
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {messageText.trim() ? (
                    <Button 
                      onClick={sendMessage}
                      variant="ghost"
                      className="text-primary hover:text-primary/80 font-semibold"
                    >
                      Send
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Paperclip className="w-5 h-5" />
                    </Button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-background">
              <div className="text-center">
                <MessageSquare className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Your Messages
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm">
                  Send private photos and messages to a friend or group
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  Send message
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;