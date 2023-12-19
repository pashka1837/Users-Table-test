import { Divider, Sheet } from "@mui/joy";
import TableHead from "../../Components/TableHead/TableHead";
import UsersList from "../../Components/UsersList/UsersList";

export default function TableData() {
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
      <TableHead />
      <Divider orientation="horizontal" />
      <UsersList />
    </Sheet>
  );
}
