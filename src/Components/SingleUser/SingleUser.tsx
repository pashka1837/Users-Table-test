import { Divider, Typography } from "@mui/joy";
import { T_User } from "../../types/types";
import "./SingleUser.css";

export default function SingleUser({
  user,
  isDivider,
}: {
  user: T_User;
  isDivider: boolean;
}) {
  return (
    <>
      <div className="singleUser_container">
        {Object.entries(user).map((entr) => {
          const [key, value] = entr;
          if (key === "id") return null;
          return <Typography key={key}>{value}</Typography>;
        })}
      </div>
      {isDivider && <Divider />}
    </>
  );
}
