import { getDataFromCookie } from "@cookie";

const EmployeePage = () => {
  const id = getDataFromCookie("emp_id");
  return (
    <div className="w-screen h-screen flex justify-center items-center align-content-center">
      <h1>Employee ID: {id}</h1>
    </div>
  );
};

export default EmployeePage;
