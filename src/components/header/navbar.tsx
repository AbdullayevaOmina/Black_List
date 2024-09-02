import { MenuIcon } from "@drawer-icons";
import { getDataFromCookie, removeDataFromCookie } from "@cookie";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import logo1 from "../../assets/logo-black.png";
import logo2 from "../../assets/logo-white.png";
import { Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    const updateDarkMode = () => {
      const currentMode = localStorage.getItem("darkMode") === "true";
      setIsDarkMode(currentMode);
    };

    window.addEventListener("storage", updateDarkMode);
    return () => {
      window.removeEventListener("storage", updateDarkMode);
    };
  }, []);

  const handleLogout = async () => {
    const keysToRemove: string[] = ["access_token", "refresh_token", "role"];
    keysToRemove.forEach((key) => {
      removeDataFromCookie(key);
    });
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-2 pr-4 md:px-4 py-[5px] dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-40">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="flex justify-start items-center w-11/12">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {MenuIcon}
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link to="/main" className="hidden md:block ml-2">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img
                  src={isDarkMode ? logo2 : logo1}
                  className="h-7"
                  alt="logo"
                />
              </span>
            </Link>
            <div className="w-full flex justify-center md:hidden">
              <Link to="/main">
                <img
                  src={isDarkMode ? logo2 : logo1}
                  className="h-6 sm:h-7"
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-end lg:order-2 w-1/12">
            <Dropdown
              arrowIcon={false}
              inline
              className="w-[200px]"
              label={<img src={avatar} className="w-9" />}
            >
              <Dropdown.Header>
                <b>{getDataFromCookie("first_name")}</b>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to={"settings"}>Account settings</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>
                <b className="text-red-400">Sign out</b>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
