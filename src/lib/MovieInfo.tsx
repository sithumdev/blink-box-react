import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

interface IMovieInfo {
  movieID: string;
}

export default function MovieInfo({ movieID }: IMovieInfo) {
  const { data: movie } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}}?language=en-US`,
    fetcher,
    { suspense: true }
  );

  return (
    <Card>
      <CardMedia
        component="img"
        loading="lazy"
        sx={{ height: 300 }}
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title={movie.title}
      />
      <CardContent>
        <Typography variant="h4">{movie.title}</Typography>
        <Typography variant="caption">{movie.overview}</Typography>
      </CardContent>
    </Card>
  );
}
