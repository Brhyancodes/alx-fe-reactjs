import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let useAuth = { token: true };
  return useAuth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;