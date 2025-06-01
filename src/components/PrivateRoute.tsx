import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { userEmail } = useAuth();
  const location = useLocation();

  if (!userEmail) {
    return (
      <Navigate
        to="/auth"
        state={{ from: location, showToast: true }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;
