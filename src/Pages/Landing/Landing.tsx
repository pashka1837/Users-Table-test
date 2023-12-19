import FilterBar from "../../Components/FilterBar/FilterBar";
import Pagination from "../../Components/Pagination/Pagination";
import TableData from "../../Components/TableData/TableData";
import UsersList from "../../Components/UsersList/UsersList";
import "./Landing.css";

export default function Landing() {
  return (
    <main>
      <FilterBar />
      <TableData />
      <Pagination />
    </main>
  );
}
