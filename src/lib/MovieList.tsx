import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function MovieList() {
  const theme = useTheme();

  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    fetcher,
    { suspense: true }
  );

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <RouterLink to={`movie/${data.results[0].id}`}>
          <Box
            sx={{
              position: "relative",
              borderRadius: `${theme.shape.borderRadius}px`,
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              loading="lazy"
              sx={{ height: 450 }}
              image={`https://image.tmdb.org/t/p/original${data.results[0].backdrop_path}`}
              title={data.results[0].title}
              style={{
                objectPosition: "top top",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                zIndex: 98,
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.8,
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(249,249,249,0) 100%)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                zIndex: 99,
                color: theme.palette.background.default,
                bottom: 20,
                left: 30,
              }}
            >
              <Typography variant="h2">
                {data.results[0].original_title}
              </Typography>
            </Box>
          </Box>
        </RouterLink>
      </Grid>

      {data.results
        .filter((_, index: number) => index !== 0)
        .map((movie: any) => (
          <Grid item xs={12} md={6} lg={4}>
            <RouterLink to={`movie/${movie.id}`}>
              <Card>
                <CardMedia
                  component="img"
                  loading="lazy"
                  sx={{ height: 500 }}
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                />
              </Card>
            </RouterLink>
          </Grid>
        ))}
    </Grid>
  );
}
