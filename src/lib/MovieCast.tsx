import { Avatar, Grid, Typography } from "@mui/material";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

interface IMovieCast {
  movieID: string;
}

export default function MovieCast({ movieID }: IMovieCast) {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`,
    fetcher,
    { suspense: true }
  );

  return (
    <Grid container spacing={2}>
      {data.cast.map((actor) => (
        <Grid key={actor.id} item xs={6}>
          <Avatar
            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
            alt={actor.name}
            sx={{ width: 56, height: 56 }}
          />

          <Typography variant="body2">{actor.character}</Typography>
          <Typography variant="caption">{actor.original_name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
