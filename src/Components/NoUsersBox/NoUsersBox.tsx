import { Box, Typography } from "@mui/joy";

export default function NoUsersBox({ msg }: { msg: string }) {
  return (
    <Box
      display="grid"
      justifyContent="center"
      alignItems="center"
      height={300}
    >
      <Typography level="h2">{msg}</Typography>
    </Box>
  );
}
