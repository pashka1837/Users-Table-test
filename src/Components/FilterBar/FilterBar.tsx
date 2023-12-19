import { Button, FormControl, Input, Sheet, Stack } from "@mui/joy";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setSearch } from "../../features/usersSlice/usersSlice";

export default function FilterBar() {
  const dispatch = useAppDispatch();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inpValue = e.target.value.toLowerCase().trim();
    console.log(inpValue);
    dispatch(setSearch(inpValue));
  }
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6, px: 4, py: 2 }}>
      <Stack direction="row" spacing={3}>
        <FormControl>
          <Input onChange={handleChange} sx={{ width: "400px" }} />
        </FormControl>
        <Button>Search</Button>
      </Stack>
    </Sheet>
  );
}
