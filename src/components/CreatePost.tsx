
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Image, X } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to storage
      // For now, create a temporary URL
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = () => {
    if (!content.trim() && !image) {
      toast.error("Please add some content to your post");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate post creation
    setTimeout(() => {
      toast.success("Post created successfully!");
      setIsSubmitting(false);
      navigate("/");
    }, 1000);
  };

  return (
    <Card className="max-w-2xl mx-auto mt-6 border border-gray-100">
      <CardHeader className="pb-3">
        <div className="flex items-center">
          <Avatar className="h-8 w-8">
            <img src="/placeholder.svg" alt="User" />
          </Avatar>
          <h2 className="ml-2 text-lg font-medium">Create a Post</h2>
        </div>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="What's on your mind?"
          className="min-h-[120px] resize-none border-none focus-visible:ring-0 text-base p-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        {image && (
          <div className="mt-4 relative">
            <Button
              size="icon"
              variant="destructive"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
            <img
              src={image}
              alt="Upload"
              className="w-full max-h-[300px] object-cover rounded-md"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="flex items-center text-social-muted hover:text-social-primary transition-colors">
            <Image className="h-5 w-5 mr-2" />
            <span className="text-sm">Add Image</span>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <Button
          className="bg-social-primary hover:bg-social-secondary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePost;
