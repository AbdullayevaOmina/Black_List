import router from "@routes";
import { Link, useLocation } from "react-router-dom";
import { DarkModeButton } from "@dark-mode";


export default function Sidebar() {
  const location = useLocation();

  return (
    <>
      <aside
        className="fixed top-0 left-0 z-[38] w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <ul className="space-y-2">
            {router.map((item: any, index: any) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                    location.pathname === item.path
                      ? "bg-gray-200 dark:bg-gray-700 "
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.content}</span>
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeButton />
        </div>
      </aside>
    </>
  );
}
