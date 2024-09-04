import { useEffect } from "react";
import { useEmpStore } from "@store";
import { getDataFromCookie } from "@cookie";

const EmployeePage = () => {
  const { isLoading, get_emp, empdata } = useEmpStore();
  const id = getDataFromCookie("emp_id");

  useEffect(() => {
    if (id) get_emp(id);
  }, []);

  return (
    <div className="p-6 md:pl-[275px] pt-[62px] flex flex-col items-center">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"></div>
        </div>
      ) : (
        empdata && (
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-md">
            <div className="flex flex-col items-center space-y-4">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {empdata?.FullName}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Date of Birth:{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {empdata?.DateOfBirth.substring(0, 10)}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Email:{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {empdata?.Email}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Position:{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {empdata?.position}
                </span>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default EmployeePage;
