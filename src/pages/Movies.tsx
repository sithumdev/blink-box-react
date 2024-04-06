import { Typography } from "@mui/material";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/error-fallback";
import MovieList from "../lib/MovieList";
import MoviesFallback from "../lib/MoviesFallback";

export default function Movies() {
  return (
    <div>
      <Typography variant="h3" mb={2}>
        Movies
      </Typography>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<MoviesFallback />}>
          <MovieList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
