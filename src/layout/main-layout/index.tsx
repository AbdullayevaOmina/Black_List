import { Header, SideBar } from "@components";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="antialiased scrol">
      <Header />
      <SideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default index;
