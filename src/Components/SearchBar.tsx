import { Button, FormControl, Input, Sheet, Stack } from "@mui/joy";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSearch } from "../features/usersSlice/usersSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function SearchBar() {
  const dispatch = useAppDispatch();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    let inpValue = form.search.value;
    if (!inpValue) return;
    inpValue = inpValue.toLowerCase().trim();
    dispatch(setSearch(inpValue));
    form.reset();
  }
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6, px: 4, py: 2 }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={3} alignItems="center">
          <FormControl>
            <Input name="search" sx={{ width: "400px" }} />
          </FormControl>
          <Button endDecorator={<KeyboardArrowRightIcon />} type="submit">
            Search
          </Button>
        </Stack>
      </form>
    </Sheet>
  );
}
