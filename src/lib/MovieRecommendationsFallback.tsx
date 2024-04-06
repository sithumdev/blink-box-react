import { Grid, Skeleton } from "@mui/material";

export default function MovieRecommendationsFallback() {
  return (
    <Grid container spacing={1} sx={{ mt: 5 }}>
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
