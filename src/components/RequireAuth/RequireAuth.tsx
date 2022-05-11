import { Navigate, useLocation } from "react-router-dom";
import routesPathaContant from "../../constants/routes-paths-constant";
import useAppSelector from "../../hooks/useAppSelector";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { authenticated } = useAppSelector((state) => state.session);
  const location = useLocation();

  if (!authenticated) {
    return (
      <Navigate
        to={routesPathaContant.login}
        state={{ path: location.pathname }}
        replace
      />
    );
  }

  return children;
};

export default RequireAuth;
