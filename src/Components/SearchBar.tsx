import {
  Button,
  FormControl,
  IconButton,
  Input,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setSearch } from "../features/usersSlice/usersSlice";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CloseIcon from "@mui/icons-material/Close";

export default function SearchBar() {
  const { search: filterByInput } = useAppSelector((store) => store.users);
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

  function handleDeleteSearch() {
    dispatch(setSearch(""));
  }

  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6, px: 4, py: 2 }}>
      <form onSubmit={handleSubmit}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={3}>
            <FormControl>
              <Input name="search" sx={{ width: "300px" }} />
            </FormControl>
            <Button endDecorator={<KeyboardArrowRightIcon />} type="submit">
              Search
            </Button>
          </Stack>

          {filterByInput && (
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography level="title-md">{filterByInput}</Typography>
              <IconButton onClick={handleDeleteSearch}>
                <CloseIcon />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </form>
    </Sheet>
  );
}
