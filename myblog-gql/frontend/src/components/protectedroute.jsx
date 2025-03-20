import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;
