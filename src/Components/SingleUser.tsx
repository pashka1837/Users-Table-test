import { Divider, Typography } from "@mui/joy";
import { T_User } from "../types/types";
import { useAppDispatch } from "../hooks/reduxHooks";
import { setSelectedUsers } from "../features/usersSlice/usersSlice";

export default function SingleUser({
  user,
  isDivider,
  isFunc,
}: {
  user: T_User;
  isDivider: boolean;
  isFunc: boolean;
}) {
  const dispatch = useAppDispatch();
  const userEntries = Object.entries(user);

  function handleClick() {
    if (!isFunc) return;
    dispatch(setSelectedUsers(user));
  }

  return (
    <>
      <div
        onClick={handleClick}
        style={{ cursor: `${isFunc ? "pointer" : "auto"}` }}
        className="single_user_container"
      >
        {userEntries.map((entr) => {
          const [key, value] = entr;
          if (key === "id") return null;
          return <Typography key={key}>{value}</Typography>;
        })}
      </div>
      {isDivider && <Divider />}
    </>
  );
}
