import { Box, CircularProgress } from "@mui/joy";

export default function Loader() {
  return (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="center"
      height={500}
    >
      <CircularProgress size="lg" />
    </Box>
  );
}
