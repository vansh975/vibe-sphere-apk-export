
import Profile from "@/components/Profile";

const ProfilePage = () => {
  // Mock profile data
  const profileData = {
    username: "amelia_parker",
    name: "Amelia Parker",
    avatar: "/placeholder.svg",
    bio: "Digital designer & amateur photographer. Lover of coffee and good conversations.",
    followers: 952,
    following: 346,
    posts: [
      {
        id: "p1",
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      },
      {
        id: "p2",
        imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      },
      {
        id: "p3",
        imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
      },
      {
        id: "p4",
        imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
      },
      {
        id: "p5",
        imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      }
    ]
  };

  return <Profile {...profileData} />;
};

export default ProfilePage;
