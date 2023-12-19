import { Button } from "@mui/joy";
import { dataKeys } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { setFilter } from "../features/usersSlice/usersSlice";

export default function TableHead() {
  const filterByFileld = useAppSelector((store) => store.users.filterByFileld);
  const dispatch = useAppDispatch();

  const dataKeysAr = Object.entries(dataKeys);
  const endDecor = (key: string) =>
    filterByFileld[key] === "max" ? (
      <KeyboardArrowUpIcon />
    ) : (
      <KeyboardArrowDownIcon />
    );
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr repeat(4, 3fr)",
        justifyItems: "center",
        padding: "2% 1%",
      }}
    >
      {dataKeysAr.map((entr) => {
        const [key, value] = entr;
        return (
          <Button
            onClick={() => dispatch(setFilter(key))}
            key={key}
            endDecorator={filterByFileld[key] && endDecor(key)}
            variant="plain"
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
}
