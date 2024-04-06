import { Grid, Skeleton } from "@mui/material";

export default function MoviesFallback() {
  return (
    <Grid container>
      {[...Array(10)].map((_, index) => (
        <Grid item key={index} xs={12} md={6} lg={4} xl={3}>
          <Skeleton variant="rounded" width="100%" height={200} />
        </Grid>
      ))}
    </Grid>
  );
}
