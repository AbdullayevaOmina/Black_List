import { getDataFromCookie } from "@cookie";

const UserPage = () => {
  const id = getDataFromCookie("user_id")
  return <div className="w-screen h-screen flex justify-center items-center align-content-center">
    <h1>user ID: {id}</h1>
  </div>;
}

export default UserPage
