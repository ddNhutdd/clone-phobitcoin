import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserTemplate from 'src/template/user/user.template'
import { url } from "src/constants";
import UserProfileTemplate from "src/template/user-profile/user-profile.template";

const Home = lazy(() => import("pages/home"));
const Transaction = lazy(() => import("pages/transaction"));
const Login = lazy(() => import("pages/login"));
const ForgotPassword = lazy(() => import("pages/forgot-password"));
const SignUp = lazy(() => import("pages/sign-up"));
const Knowledge = lazy(() => import("pages/knowledge"));
const News = lazy(() => import('pages/news'));
const QuestionAnswer = lazy(() => import('pages/question-answer'));
const Search = lazy(() => import('pages/search'));
const Contact = lazy(() => import('pages/contact'));
const Profile = lazy(() => import('pages/profile'));
const Referral = lazy(() => import('pages/referral'));
const BuyHistory = lazy(() => import('pages/buy-history'));
const SellHistory = lazy(() => import('pages/sell-history'));
const ChangePassword = lazy(() => import('pages/change-password'));
const Sell = lazy(() => import('pages/sell'));
const Buy = lazy(() => import('pages/buy'));

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
      },
      {
        path: url.knowledge,
        element: (
          <Suspense>
            <Knowledge />
          </Suspense>
        )
      },
      {
        path: url.news,
        element: (
          <Suspense>
            <News />
          </Suspense>
        )
      },
      {
        path: url.questionAnswer,
        element: (
          <Suspense>
            <QuestionAnswer />
          </Suspense>
        )
      },
      {
        path: url.search,
        element: (
          <Suspense>
            <Search />
          </Suspense>
        )
      },
      {
        path: url.contact,
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        )
      },
      {
        path: url.sell,
        element: (
          <Suspense>
            <Sell />
          </Suspense>
        )
      },
      {
        path: url.buy,
        element: (
          <Suspense>
            <Buy />
          </Suspense>
        )
      }
    ]
  },
  {
    element: <UserProfileTemplate />,
    children: [{
      path: url.profile,
      element: (
        <Suspense>
          <Profile />
        </Suspense>
      )
    },
    {
      path: url.referral,
      element: (
        <Suspense>
          <Referral />
        </Suspense>
      )
    },
    {
      path: url.buyHistory,
      element: (
        <Suspense>
          <BuyHistory />
        </Suspense>
      )
    },
    {
      path: url.sellHistory,
      element: (
        <Suspense>
          <SellHistory />
        </Suspense>
      )
    },
    {
      path: url.changePassword,
      element: (
        <Suspense>
          <ChangePassword />
        </Suspense>
      )
    }
    ]
  }
])


