import { lazy } from "react";

export const MoviesPage = lazy(() => import("./Movies"));
export const MovieDetailsPage = lazy(() => import("./MovieDetails"));
