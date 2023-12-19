import { Typography } from "@mui/joy";
import { T_User } from "../../types/types";
import "./SingleUser.css";

export default function SingleUser({ user }: { user: T_User }) {
  return (
    <div className="singleUser_container">
      {Object.entries(user).map((entr, i) => {
        const [key, value] = entr;
        if (key === "id") return null;
        return <Typography key={key}>{value}</Typography>;
      })}
    </div>
  );
}
