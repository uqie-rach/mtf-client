import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterTeamPage,
  SignUpPage,
} from "./pages/";
import { Layout, Authenticated } from "./layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
    {
      path: "/",
      element: <Authenticated />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/register-team",
          element: <RegisterTeamPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
