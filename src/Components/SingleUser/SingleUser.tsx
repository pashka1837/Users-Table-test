import { Typography } from "@mui/joy";
import { T_User } from "../../types/types";
import "./SingleUser.css";

export default function SingleUser({ user }: { user: T_User }) {
  return (
    <div className="singleUser_container">
      {Object.values(user).map((value) => {
        console.log(value);
        return <Typography>{value}</Typography>;
      })}
    </div>
  );
}
