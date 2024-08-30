import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import {
  Home,
  Employees,
  EmployeePage,
  NotFound,
  Settings,
  UsersPage,
  HRPage,
  UserPage,
} from "@pages";
import { MainLayout, SignIn, SignUp } from "@layout";
import { getDataFromCookie } from "@cookie";

import { ProtectedRoute, RequireAuth } from "./protected-routes/index";

const index = () => {
  const emp_id = getDataFromCookie("emp_id");
  const user_id = getDataFromCookie("user_id");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<ProtectedRoute element={<SignIn />} />} />
        <Route
          path="signup"
          element={<ProtectedRoute element={<SignUp />} />}
        />
        <Route
          path="/main/*"
          element={<RequireAuth element={<MainLayout />} />}
        >
          {/* <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/main/*" element={<MainLayout />}> */}
          <Route index element={<Home />} />
          <Route path="employees" element={<Employees />} />
          <Route path="users" element={<UsersPage />} />
          <Route path={`users/user:${user_id}`} element={<UserPage />} />

          <Route path="hr" element={<HRPage />} />
          <Route
            path={`employees/employee:${emp_id}`}
            element={<EmployeePage />}
          />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
