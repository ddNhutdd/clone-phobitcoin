import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from 'src/template/user/user.template'
import { url } from "src/constants";

const Home = lazy(() => import("pages/home"));
const Transaction = lazy(() => import("pages/transaction"));
const Login = lazy(() => import("pages/login"))
const ForgotPassword = lazy(() => import("pages/forgot-password"))
const SignUp = lazy(() => import("pages/sign-up"))

export const router = createBrowserRouter([
  {
    element: <UserTemplate />,
    children: [
      {
        path: url.home,
        index: true,
        element: (
          <Suspense>
            <Home />
          </Suspense>
        )
      },
      {
        path: url.transaction,
        element: (
          <Suspense>
            <Transaction />
          </Suspense>
        )
      },
      {
        path: url.login,
        element: (
          <Suspense>
            <Login />
          </Suspense>
        )
      },
      {
        path: url.forgotPassword,
        element: (
          <Suspense>
            <ForgotPassword />
          </Suspense>
        )
      },
      {
        path: url.signUp,
        element: (
          <Suspense>
            <SignUp />
          </Suspense>
        )
      }
    ]
  }
])