import {Navigate, RouteObject} from "react-router-dom";
import {lazy} from "react";
import Layout from "../components/Layout";

const AuthPage = lazy(() => import("../pages/AuthPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const FeedPage = lazy(() => import("../pages/FeedPage"));
const TrendingPage = lazy(() => import("../pages/TrendingPage"));
const PlayerPage = lazy(() => import("../pages/PlayerPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage"));
const LibraryPage = lazy(() => import("../pages/LibraryPage"));
const SettingsPage = lazy(() => import("../pages/SettingsPage"));

export const PUBLIC_ROUTES: RouteObject[] = [
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <Navigate to="/auth" replace />,
  },
];

export const PRIVATE_ROUTES: RouteObject[] = [
  {
    path: "not-found",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "feed",
        element: <FeedPage />,
      },
      {
        path: "trending",
        element: <TrendingPage />,
      },
      {
        path: "player",
        element: <PlayerPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "library",
        element: <LibraryPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/feed" replace />,
  },
];
