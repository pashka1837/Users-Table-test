import TableHead from "../TableHead/TableHead";
import { Divider, Sheet } from "@mui/joy";
import UsersList from "../UsersList/UsersList";

export default function TableData() {
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
      <TableHead />
      <Divider orientation="horizontal" />
      <UsersList />
    </Sheet>
  );
}
