
import { useState } from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PostProps {
  id: string;
  username: string;
  avatar: string;
  imageUrl?: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const Post = ({
  id,
  username,
  avatar,
  imageUrl,
  content,
  likes,
  comments,
  timestamp,
}: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <Card className="mb-4 card-hover border border-gray-100">
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <img src={avatar} alt={username} />
          </Avatar>
          <div className="ml-2">
            <Link to={`/profile/${username}`} className="font-medium hover:underline">
              {username}
            </Link>
            <p className="text-xs text-social-muted">{timestamp}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3 pt-2">
        <p className="text-sm mb-3">{content}</p>
        {imageUrl && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Post content"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="py-2 border-t border-gray-100">
        <div className="flex items-center space-x-6 w-full">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex items-center gap-1 text-social-muted",
              liked && "text-red-500"
            )}
            onClick={handleLike}
          >
            <Heart className={cn("h-5 w-5", liked && "fill-red-500")} />
            <span>{likeCount}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-social-muted"
          >
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 text-social-muted ml-auto"
          >
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
