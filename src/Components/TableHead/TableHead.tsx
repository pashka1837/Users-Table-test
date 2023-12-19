import { Button } from "@mui/joy";
import { dataKeys } from "../../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setFilter } from "../../features/usersSlice/usersSlice";

import "./TableHead.css";

export default function TableHead() {
  const filterByFileld = useAppSelector((store) => store.users.filterByFileld);
  const dispatch = useAppDispatch();

  function handleFilter(key: string) {
    dispatch(setFilter(key));
  }
  return (
    <div className="tableHead">
      {Object.entries(dataKeys).map((entr) => {
        const [key, value] = entr;
        const endDecor = filterByFileld[key] ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        );
        return (
          <Button
            onClick={() => handleFilter(key)}
            key={key}
            endDecorator={endDecor}
            variant="plain"
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
}
