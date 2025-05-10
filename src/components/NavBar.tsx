
import { Home, User, Bell, PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:top-0 md:bottom-auto z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-3 md:justify-between">
          <Link to="/" className="hidden md:block text-xl font-bold text-social-primary">
            SocialVibe
          </Link>
          
          <div className="flex items-center justify-around w-full md:w-auto md:justify-end md:space-x-8">
            <NavItem icon={<Home />} label="Home" to="/" />
            <NavItem icon={<PlusSquare />} label="Create" to="/create" />
            <NavItem icon={<Bell />} label="Notifications" to="/notifications" />
            <NavItem icon={<User />} label="Profile" to="/profile" />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const NavItem = ({ icon, label, to }: NavItemProps) => {
  const pathname = window.location.pathname;
  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center text-social-muted transition-colors",
        isActive && "text-social-primary"
      )}
    >
      <div className="text-[22px]">{icon}</div>
      <span className="text-xs mt-1 hidden md:block">{label}</span>
    </Link>
  );
};

export default NavBar;
