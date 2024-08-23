import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@cookie";
import { ProtectedRouteProps } from "@global-interface";
const Index = ({ element }: ProtectedRouteProps) =>
  isAuthenticated() ? element : <Navigate to="/" replace />;
export default Index;
