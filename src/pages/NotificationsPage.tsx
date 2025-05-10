
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "mention";
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
}

const NotificationsPage = () => {
  // Mock notifications
  const notifications: Notification[] = [
    {
      id: "n1",
      type: "like",
      user: {
        name: "Sarah Johnson",
        username: "sarahj",
        avatar: "/placeholder.svg"
      },
      content: "liked your post",
      timestamp: "5m ago",
      read: false
    },
    {
      id: "n2",
      type: "comment",
      user: {
        name: "Mike Peterson",
        username: "mikep",
        avatar: "/placeholder.svg"
      },
      content: "commented on your post: \"This looks amazing!\"",
      timestamp: "1h ago",
      read: false
    },
    {
      id: "n3",
      type: "follow",
      user: {
        name: "Emma Wilson",
        username: "emmaw",
        avatar: "/placeholder.svg"
      },
      content: "started following you",
      timestamp: "3h ago",
      read: true
    },
    {
      id: "n4",
      type: "mention",
      user: {
        name: "David Miller",
        username: "davidm",
        avatar: "/placeholder.svg"
      },
      content: "mentioned you in a comment: \"@amelia_parker check this out!\"",
      timestamp: "1d ago",
      read: true
    }
  ];

  return (
    <div className="container mx-auto px-4 pt-6 pb-20 md:pt-20 md:pb-6 animate-fade-in">
      <div className="max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={notification.read ? "bg-white" : "bg-blue-50"}
            >
              <CardHeader className="pb-2 pt-4">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <img src={notification.user.avatar} alt={notification.user.name} />
                  </Avatar>
                  <div className="ml-2">
                    <CardTitle className="text-base">
                      {notification.user.name}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      @{notification.user.username}
                    </CardDescription>
                  </div>
                  <div className="ml-auto text-xs text-social-muted">
                    {notification.timestamp}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-4 pt-0">
                <p className="text-sm">{notification.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
