import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IMovieRecommendations {
  movieID: string;
}

export default function MovieRecommendations({
  movieID,
}: IMovieRecommendations) {
  const { data: movie } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/recommendations?language=en-US&page=1`,
    fetcher,
    { suspense: true }
  );

  return (
    <Grid container spacing={1} mt={5}>
      {movie.results.map((result) => (
        <Grid item key={result.id} xs={12} lg={4}>
          <Link to={`/movie/${result.id}`}>
            <Card>
              <CardMedia
                component="img"
                loading="lazy"
                image={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                title={result.title}
                sx={{ height: 400 }}
              />
              <CardContent>
                <Typography sx={{ textDecoration: "none" }} variant="subtitle1">
                  {result.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
