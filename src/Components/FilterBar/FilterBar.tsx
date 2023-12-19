import { FormControl, Input, Sheet, Stack, Typography } from "@mui/joy";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setSearch } from "../../features/usersSlice/usersSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function FilterBar() {
  const dispatch = useAppDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inpValue = e.target.value.toLowerCase().trim();
    dispatch(setSearch(inpValue));
  }
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6, px: 4, py: 2 }}>
      <Stack direction="row" spacing={3} alignItems="center">
        <FormControl>
          <Input onChange={handleChange} sx={{ width: "400px" }} />
        </FormControl>
        <Typography
          color="primary"
          level="h4"
          startDecorator={<ArrowBackIcon />}
        >
          Type to Search!
        </Typography>
      </Stack>
    </Sheet>
  );
}
