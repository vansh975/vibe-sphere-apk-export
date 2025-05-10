
import Post from "@/components/Post";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FeedPage = () => {
  // Mock data for posts
  const posts = [
    {
      id: "1",
      username: "amelia_parker",
      avatar: "/placeholder.svg", 
      content: "Just finished working on my latest design project, so excited to share it with you all!",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      likes: 42,
      comments: 5,
      timestamp: "2h ago"
    },
    {
      id: "2",
      username: "tech_enthusiast",
      avatar: "/placeholder.svg",
      content: "The future of coding is here! Check out this amazing new development environment.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      likes: 128,
      comments: 24,
      timestamp: "5h ago"
    },
    {
      id: "3",
      username: "nature_lover",
      avatar: "/placeholder.svg",
      content: "Found this peaceful spot during my hike today. Absolutely breathtaking views!",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      likes: 253,
      comments: 18,
      timestamp: "8h ago"
    },
    {
      id: "4",
      username: "cat_person",
      avatar: "/placeholder.svg",
      content: "My cat decided that my keyboard is the perfect place for a nap. Working from home struggles! 😂",
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      likes: 315,
      comments: 42,
      timestamp: "1d ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-6 pb-20 md:pt-20 md:pb-6 animate-fade-in">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Feed</h1>
          <Button asChild className="bg-social-primary hover:bg-social-secondary">
            <Link to="/create" className="flex items-center gap-1">
              <PlusCircle className="h-4 w-4" />
              <span>Create</span>
            </Link>
          </Button>
        </div>
        
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
