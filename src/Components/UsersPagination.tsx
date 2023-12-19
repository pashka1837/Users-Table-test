import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Stack } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { setSearch } from "../features/usersSlice/usersSlice";

export default function UsersPagination() {
  const { curPage, totalPages } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handlePagination(e: React.ChangeEvent<unknown>, value: number) {
    dispatch(setSearch(""));
    navigate(`/page/${value}`);
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
