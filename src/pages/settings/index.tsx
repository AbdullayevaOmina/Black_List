const index = () => {
  return (
    // <div className="p-3 md:pl-[270px] w-full pt-[60px] h-[100vh]">
    //   <div className="dark:bg-gray-800 bg-white w-full h-full flex flex-col gap-5 items-center p-6 rounded-lg">
    //     <div className="rounded-full border-cyan-700 border-x-4">
    //       <svg
    //         className="w-[200px] h-[200px] text-gray-500 dark:text-white"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         fill="currentColor"
    //         viewBox="0 0 24 24"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    <div className="p-6 md:pl-[275px] pt-[62px] flex flex-col items-center">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Full Name
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Date of Birth:{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
             YYYY-MM-DD
            </span>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Email:{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              ...@gmail.com
            </span>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Position:{" "}
            <span className="font-medium text-gray-700 dark:text-gray-300">
              ___________
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
