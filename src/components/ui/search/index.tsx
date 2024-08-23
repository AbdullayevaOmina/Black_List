import { SearchIcon } from "@drawer-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const GlobalSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const input_value = params.get("search");
    setSearch(input_value ? input_value : "");
  }, [location.search, search]);

  const handleChange = (event: any) => {
    const search = event.target.value;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("search", search);
    navigate(`?${searchParams}`);
  };

  return (
    <>
      <form className="hidden md:block">
        <label htmlFor="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative ml-10 md:w-72 lg:w-[400px] xl:w-[500px]">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            {SearchIcon}
          </div>
          <input
            type="search"
            id="topbar-search"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
};

export default GlobalSearch;
