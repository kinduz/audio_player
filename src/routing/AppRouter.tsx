import {useRoutes} from "react-router-dom";
import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "./routing.config";
import {Suspense} from "react";
import {useAppSelector} from "../hooks/useAppSelector";
import Loading from "../components/UI/Loading/Loading";

function RoutesFunction() {
  const token = useAppSelector(state => state.auth.token);
  const routing = useRoutes(token ? PRIVATE_ROUTES : PUBLIC_ROUTES);
  return routing;
}

const AppRouter = () => {
  return (
    <Suspense fallback=<Loading />>
      <RoutesFunction />
    </Suspense>
  );
};

export default AppRouter;
