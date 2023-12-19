import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../features/usersSlice/usersSlice";
import { Divider } from "@mui/joy";
import "./UserList.css";
import SingleUser from "../SingleUser/SingleUser";

export default function UsersList() {
  const { users, isLoading, error, isError, curPage } = useAppSelector(
    (store) => store.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers(`${curPage}`));
  }, []);

  if (isLoading) return <h2>loading</h2>;
  if (isError) return <h2>Error</h2>;
  return (
    <div className="userList_container">
      {users &&
        users.map((user, i) => (
          <>
            <SingleUser key={user._id + user.email} user={user} />
            {i !== users.length - 1 && <Divider orientation="horizontal" />}
          </>
        ))}
    </div>
  );
}
