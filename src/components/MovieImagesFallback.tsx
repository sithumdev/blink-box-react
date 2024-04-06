import { Grid, Skeleton } from "@mui/material";

export default function MovieImagesFallback() {
  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <Skeleton variant="rounded" height={400} />
      </Grid>
    </Grid>
  );
}
