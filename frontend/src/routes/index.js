import React from "react";
import PathConstants from "./pathConstants";

const Login = React.lazy(() => import("../pages/Login"));

const routes = [{ path: PathConstants.Login, element: <Login /> }];

export default routes;
