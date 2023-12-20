import { Pagination } from "@mui/material";
import { useAppDispatch } from "../hooks/reduxHooks";
import { Stack } from "@mui/joy";
import { useLocation, useNavigate } from "react-router-dom";
import {
  clearSelectedUsers,
  setSearch,
} from "../features/usersSlice/usersSlice";
import { useQueryStateResult } from "../services/usersApi";

export default function UsersPagination() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search: urlSearch, pathname } = useLocation();
  const { data } = useQueryStateResult(urlSearch || "?page=1");

  const { curPage, totalPages } = data!;

  function handlePagination(e: React.ChangeEvent<unknown>, value: number) {
    if (curPage === value) return;
    dispatch(setSearch(""));
    dispatch(clearSelectedUsers());
    navigate(`${pathname}?page=${value}`);
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
