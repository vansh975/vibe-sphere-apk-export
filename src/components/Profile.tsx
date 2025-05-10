
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, Users } from "lucide-react";

interface ProfileProps {
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  posts: Array<{
    id: string;
    imageUrl: string;
  }>;
}

const Profile = ({
  username,
  name,
  avatar,
  bio,
  followers,
  following,
  posts,
}: ProfileProps) => {
  return (
    <div className="container mx-auto px-4 pt-6 pb-20 md:pt-20 md:pb-6 animate-fade-in">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="h-24 w-24 mb-4">
          <img src={avatar} alt={name} />
        </Avatar>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-social-muted">@{username}</p>
        <p className="text-center mt-3 mb-4 max-w-md">{bio}</p>
        
        <div className="flex items-center justify-center mb-6">
          <div className="text-center mr-8">
            <p className="text-xl font-semibold">{followers}</p>
            <p className="text-social-muted text-sm">Followers</p>
          </div>
          <div className="text-center ml-8">
            <p className="text-xl font-semibold">{following}</p>
            <p className="text-social-muted text-sm">Following</p>
          </div>
        </div>
        
        <Button className="bg-social-primary hover:bg-social-secondary">
          Follow
        </Button>
      </div>

      <Tabs defaultValue="posts">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid3X3 className="h-4 w-4" />
            <span>Posts</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Tagged</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts">
          <div className="grid grid-cols-3 gap-1">
            {posts.map((post) => (
              <Card key={post.id} className="aspect-square overflow-hidden border-none">
                <CardContent className="p-0">
                  <img
                    src={post.imageUrl}
                    alt="Post"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tagged">
          <div className="text-center py-8 text-social-muted">
            No tagged posts yet
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
