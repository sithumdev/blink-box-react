import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Container, Typography } from "@mui/material";

export default function ErrorFallback() {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
        <ErrorOutlineIcon fontSize="large" />
        <Typography variant="h4">Something Went Wrong</Typography>
        <Typography variant="caption">
          Something did happen. We are working on the issue.
        </Typography>
      </Box>
    </Container>
  );
}
