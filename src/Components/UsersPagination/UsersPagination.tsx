import { Pagination } from "@mui/material";
import "./UsersPagination.css";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setPage } from "../../features/usersSlice/usersSlice";
import { Stack } from "@mui/joy";

export default function UsersPagination() {
  const { curPage, totalPages } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();

  function handlePagination(e: React.ChangeEvent<unknown>, value: number) {
    console.log(value);
    dispatch(setPage(value));
  }
  return (
    <Stack
      className="pagination_container"
      flexDirection="row"
      justifyContent="center"
    >
      <Pagination
        onChange={handlePagination}
        count={totalPages}
        page={curPage}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
