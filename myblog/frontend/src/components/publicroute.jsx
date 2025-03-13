import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
