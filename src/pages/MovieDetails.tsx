import { Grid, Typography } from "@mui/material";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import MovieImagesFallback from "../components/MovieImagesFallback";
import ErrorFallback from "../components/error-fallback";
import MovieCast from "../lib/MovieCast";
import MovieCastFallback from "../lib/MovieCastFallback";
import MovieImages from "../lib/MovieImages";
import MovieInfo from "../lib/MovieInfo";
import MovieInfoFallback from "../lib/MovieInfoFallback";
import MovieRecommendationsFallback from "../lib/MovieRecommendationsFallback";
import MovieRecommendations from "../lib/MovieRecommendations";

export default function MovieDetails() {
  const params = useParams();

  return (
    <Grid container>
      <Grid item xs={12} lg={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cast
        </Typography>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<MovieCastFallback />}>
            <MovieCast movieID={params.movieID ?? ""} />
          </Suspense>
        </ErrorBoundary>
      </Grid>
      <Grid item xs={12} lg={9}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<MovieInfoFallback />}>
            <MovieInfo movieID={params.movieID ?? ""} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<MovieImagesFallback />}>
            <MovieImages movieID={params.movieID ?? ""} />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<MovieRecommendationsFallback />}>
            <MovieRecommendations movieID={params.movieID ?? ""} />
          </Suspense>
        </ErrorBoundary>
      </Grid>
    </Grid>
  );
}
