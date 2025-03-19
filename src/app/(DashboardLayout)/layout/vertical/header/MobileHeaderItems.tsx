import { Icon } from "@iconify/react";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import AppLinks from "./AppLinks";
import { CustomizerContext } from "@/app/context/customizerContext";
import { useContext } from "react";

const MobileHeaderItems = () => {
  const {setActiveMode,activeMode } = useContext(CustomizerContext);
  const toggleMode = () => {
    setActiveMode((prevMode: string) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <Navbar
      fluid
      className="rounded-none bg-lightgray dark:bg-dark flex-1 px-9"
    >
      <div className="xl:hidden block w-full">
        {/* Theme Toggle */}
        {activeMode === "light" ? (
          <div
            className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-darkminisidebar dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink dark:text-white"
            onClick={toggleMode}
          >
            <span className="flex items-center">
              <Icon
                icon="solar:moon-line-duotone"
                width="20"
              />
            </span>
          </div>
        ) : (
          // Dark Mode Button
          <div
            className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-darkminisidebar dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink dark:text-white"
            onClick={toggleMode}
          >
            <span className="flex items-center">
              <Icon
                icon="solar:sun-bold-duotone"
                width="20"
              />
            </span>
          </div>
        )}

        {/* Notification Dropdown */}
        <Notifications />

        {/* Messages Dropdown */}
        <Messages />

        {/* App Link Dropwown   */}
        <AppLinks />

        {/* Profile Dropdown */}
        <Profile />
      </div>
    </Navbar>
  );
};

export default MobileHeaderItems;