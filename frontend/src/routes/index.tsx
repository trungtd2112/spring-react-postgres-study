import React from "react";
import PathConstants from "./pathConstants";

const Login = React.lazy(() => import("../pages/Login"));
const RegisterForm = React.lazy(() => import("../pages/RegisterForm"));

const routes = [
  { path: PathConstants.Login, element: <Login /> },
  { path: PathConstants.RegisterForm, element: <RegisterForm /> },
];

export default routes;
