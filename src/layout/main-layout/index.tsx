import { Header, SideBar } from "@components";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="antialiased bg-gray-200 dark:bg-gray-900 scrol">
      <Header />
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default index;
