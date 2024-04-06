import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageFallback from "./components/page-fallback";
import MainLayout from "./layout/MainLayout";
import { MovieDetailsPage, MoviesPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <Suspense fallback={<PageFallback />}>
            <MoviesPage />
          </Suspense>
        ),
      },
      {
        path: "/movie/:movieID",
        element: (
          <Suspense fallback={<PageFallback />}>
            <MovieDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
