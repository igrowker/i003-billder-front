import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeIcon, UserIcon, HelpIcon } from "@/assets/icons/IconsNavBars";

export const BottomNavBar = () => {
  const location = useLocation();

  const [selectedLink, setSelectedLink] = useState("/home");

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  const getLinkStyles = (path: string) => {
    return selectedLink === path
      ? "text-customBlue pb-1 border-b-2 border-black"
      : "text-white";
  };

  return (
    <nav className="fixed h-14 z-[100] bottom-0 left-0 right-0 w-full bg-customOrange p-4">
      <div className="flex justify-around items-center">
        <Link to="/home" className={getLinkStyles("/home")}>
          <HomeIcon />
        </Link>

        <Link to="/profile" className={getLinkStyles("/profile")}>
          <UserIcon />
        </Link>

        <Link to="/help" className={getLinkStyles("/help")}>
          <HelpIcon />
        </Link>
      </div>
    </nav>
  );
};

