import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AdminDashboardPage } from "./AdminRoutes";
import Loader from "../components/Layout/Loader";

const ProtectedAdminRoute = ({ children }) => {
  const { loading, isAuthenticated,user } = useSelector((state) => state.user);
  if (loading === true) {
    return <Loader />;
  }
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    } else if(user.role !== "Admin"){
        return <Navigate to="/" replace />;
    }
    // <AdminDashboardPage/>
    return children;
  }
};

export default ProtectedAdminRoute;
