import { Divider, Sheet } from "@mui/joy";
import { UsersList, TableHead } from "../Components/index";

export default function TableData() {
  return (
    <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
      <TableHead />
      <Divider orientation="horizontal" />
      <UsersList />
    </Sheet>
  );
}
