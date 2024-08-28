import { CloseIcon, MenuIcon } from "@drawer-icons";
import { getDataFromCookie, removeDataFromCookie } from "@cookie";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import logo1 from "../../assets/logo-black.png";
import logo2 from "../../assets/logo-white.png";

import { Avatar, Dropdown } from "flowbite-react";

const index = () => {
  const navigate = useNavigate();
  const isDark = false;

  const handleLogout = async () => {
    const keysToRemove: string[] = ["access_token", "refresh_token"];
    keysToRemove.forEach((key) => {
      removeDataFromCookie(key);
    });
    navigate("/");
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-2 pr-4 md:px-4  py-[5px] dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-40">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="flex justify-start items-center w-11/12">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {MenuIcon}
              {CloseIcon}
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <Link to="/main" className="hidden md:block ml-2">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <img
                  src={isDark ? logo1 : logo2}
                  className="h-7"
                  alt="logo image"
                />
              </span>
            </Link>
            <div className="w-full flex justify-center md:hidden">
              <Link to="/main">
                <img
                  src={isDark ? logo1 : logo2}
                  className="h-7"
                  alt="logo image"
                />
              </Link>
            </div>
          </div>

          <div className="flex justify-end lg:order-2 w-1/12">
            <div
              className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl"
              id="dropdown"
            >
              <div className="py-3 px-4 grid gap-1">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  {getDataFromCookie("first_name")}{" "}
                  {getDataFromCookie("last_name")}
                </span>
                <span className="block text-sm text-sky-900 truncate dark:text-sky-600">
                  {getDataFromCookie("admin_email")}
                </span>
                <span className="block text-sm text-gray-900 truncate dark:text-white">
                  {getDataFromCookie("admin_phone_number")}
                </span>
              </div>
              <ul
                className="py-1 text-gray-700 dark:text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    My profile
                  </a>
                </li>
                <li>
                  <Link
                    className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    to={"settings"}
                  >
                    Account settings
                  </Link>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-700 dark:text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <span
                    onClick={handleLogout}
                    className="flex gap-2 items-center py-2 px-4 text-sm rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-[19px] h-[19px] text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.6"
                        d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                      />
                    </svg>
                    Logout
                  </span>
                </li>
              </ul>
            </div>

            <Dropdown
              arrowIcon={false}
              inline
              className="w-[200px]"
              label={<Avatar alt="User settings" img={avatar} rounded />}
            >
              <Dropdown.Header>
                <b>Username</b>
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

export default index;
