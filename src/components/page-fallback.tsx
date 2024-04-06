import { Box, Container, useTheme } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

export default function PageFallback() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <RotatingLines
          visible
          width="96"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          strokeColor={theme.palette.primary.main}
        />
      </Box>
    </Container>
  );
}
