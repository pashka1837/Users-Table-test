import FilterBar from "../../Components/FilterBar/FilterBar";
import UsersPagination from "../../Components/UsersPagination/UsersPagination";
import TableData from "../../Components/TableData/TableData";
import "./Landing.css";

export default function Landing() {
  return (
    <main>
      <FilterBar />
      <TableData />
      <UsersPagination />
    </main>
  );
}
