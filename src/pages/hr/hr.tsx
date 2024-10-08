import { getDataFromCookie } from "@cookie";

const HRPage = () => {
  const id = getDataFromCookie("hr_id");
  return (
    <div className="w-screen h-screen flex justify-center items-center align-content-center">
      <h1>HR ID: {id}</h1>
    </div>
  );
};

export default HRPage;
