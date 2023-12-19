import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../features/usersSlice/usersSlice";
import { Divider } from "@mui/joy";
import "./UserList.css";
import SingleUser from "../SingleUser/SingleUser";
import Loader from "../Loader/Loader";
import { filterBySearch, filterUsers } from "../../utils/filter";

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

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error</h2>;

  let users = filterUsers(data, filterByFileld);
  if (search) users = filterBySearch(users, search);

  return (
    <div className="userList_container">
      {users.map((user, i) => (
        <Fragment key={user._id + user.email}>
          <SingleUser user={user} />
          {i !== users.length - 1 && <Divider orientation="horizontal" />}
        </Fragment>
      ))}
    </div>
  );
}
