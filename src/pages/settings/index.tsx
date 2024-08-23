import { deleteIcon2, editIcon2 } from "@global-icons";
import { getDataFromCookie } from "@cookie";

const index = () => {
  const adminFName = getDataFromCookie("first_name");
  const adminLName = getDataFromCookie("last_name");
  const adminPhone = getDataFromCookie("admin_phone_number");
  const adminEmail = getDataFromCookie("admin_email");
  return (
    <div className="p-4 md:pl-[275px] w-full pt-20 h-[100vh]">
      <div className="dark:bg-gray-700 bg-white w-full h-full flex flex-col gap-5 items-center p-6 rounded-lg">
        <div className="rounded-full border-cyan-700 border-x-4">
          <svg
            className="w-[200px] h-[200px] text-gray-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div className="w-full">
          <h1 className="text-4xl text-center font-bold">
            {adminFName} {adminLName}
          </h1>
          <div className="mt-10 grid gap-4">
            <h3 className="text-2xl">
              Phone: <b className="ml-8">{adminPhone}</b>
            </h3>
            <h3 className="text-2xl">
              Email: <b className="ml-8">{adminEmail}</b>
            </h3>
          </div>
        </div>

        <div className="flex w-full justify-end gap-3 mt-16">
          <button>{editIcon2}</button>
          <button>{deleteIcon2}</button>
        </div>
      </div>
    </div>
  );
};

export default index;
