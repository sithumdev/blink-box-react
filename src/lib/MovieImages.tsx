import { CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

interface IMovieImages {
  movieID: string;
}

export default function MovieImages({ movieID }: IMovieImages) {
  const { data: movie } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieID}/images`,
    fetcher,
    { suspense: true }
  );

  return (
    <Carousel indicators={false} animation="slide">
      {movie.backdrops.map((backdrop, index) => (
        <CardMedia
          component="img"
          loading="lazy"
          image={`https://image.tmdb.org/t/p/original${backdrop.file_path}`}
          sx={{ height: 400 }}
          title={backdrop.file_path}
        />
      ))}
    </Carousel>
  );
}
