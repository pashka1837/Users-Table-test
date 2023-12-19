import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../features/usersSlice/usersSlice";
import { Divider } from "@mui/joy";
import "./UserList.css";
import SingleUser from "../SingleUser/SingleUser";
import Loader from "../Loader/Loader";
import { T_User } from "../../types/types";

export default function UsersList() {
  const {
    users: data,
    isLoading,
    error,
    isError,
    curPage,
    filterByFileld,
    search,
  } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("dis");
    dispatch(fetchUsers(`${curPage}`));
  }, []);

  function filterUsers(data: T_User[]): T_User[] {
    let key = Object.keys(filterByFileld).at(0);
    let curFilter = filterByFileld[key!];
    return data.toSorted((a, b) => {
      let first = a[key!];
      let second = b[key!];
      if (key !== "_id")
        return curFilter === "min"
          ? first.localeCompare(second)
          : second.localeCompare(first);
      return curFilter === "min" ? first - second : second - first;
    });
  }

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error</h2>;

  const users = filterUsers(data);
  return (
    <div className="userList_container">
      {users &&
        users.map((user, i) => (
          <Fragment key={user._id + user.email}>
            <SingleUser user={user} />
            {i !== users.length - 1 && <Divider orientation="horizontal" />}
          </Fragment>
        ))}
    </div>
  );
}
