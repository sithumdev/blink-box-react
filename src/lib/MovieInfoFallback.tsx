import { Skeleton } from "@mui/material";

export default function MovieInfoFallback() {
  return (
    <>
      <Skeleton animation="wave" variant="rounded" width="100%" height={300} />
      <Skeleton animation="wave" variant="text" width="60%" />
      <Skeleton animation="wave" variant="text" />
      <Skeleton animation="wave" variant="text" />
    </>
  );
}
