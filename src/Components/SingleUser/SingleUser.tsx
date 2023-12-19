import { Divider, Typography } from "@mui/joy";
import { T_User } from "../../types/types";

export default function SingleUser({
  user,
  isDivider,
}: {
  user: T_User;
  isDivider: boolean;
}) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr repeat(4, 3fr)",
          justifyItems: "center",
          padding: "10px 0",
        }}
      >
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
