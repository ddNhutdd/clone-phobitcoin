import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from 'src/template/user/user.template'
import { url } from "src/constants";

const Home = lazy(() => import("pages/home"));

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

      }
    ]
  }
])