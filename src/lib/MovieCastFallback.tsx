import { Skeleton } from "@mui/material";

export default function MovieCastFallback() {
  return (
    <>
      <Skeleton variant="circular" height={40} width={40} />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="100%" />
    </>
  );
}
