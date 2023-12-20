import { Divider, Sheet } from "@mui/joy";
import {
  UsersList,
  TableHead,
  UsersPagination,
  Loader,
} from "../Components/index";
import { useGetUsersQuery } from "../services/usersApi";
import { useLocation } from "react-router-dom";

export default function Landing() {
  const { search } = useLocation();
  const { isLoading, isError, error } = useGetUsersQuery(search || "?page=1");

  if (isLoading) return <Loader />;
  if (isError) {
    console.error(error);
    throw Error();
  }

  return (
    <>
      <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
        <TableHead />
        <Divider orientation="horizontal" />
        <UsersList />
      </Sheet>
      <UsersPagination />
    </>
  );
}
