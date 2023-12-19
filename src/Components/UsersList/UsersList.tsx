import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  fetchUsers,
  setPage,
  setTotalPages,
} from "../../features/usersSlice/usersSlice";
import SingleUser from "../SingleUser/SingleUser";
import Loader from "../Loader/Loader";
import { filterBySearch, filterUsers } from "../../utils/filter";
import NoUsersBox from "../NoUsersBox/NoUsersBox";
import { useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../services/usersApi";

export default function UsersList() {
  const { page } = useParams();
  const {
    users: data,
    isLoading,
    error,
    isError,
    filterByFileld,
    search,
  } = useAppSelector((store) => store.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page!));
    dispatch(setPage(parseInt(page!)));
  }, [page]);

  if (isLoading) return <Loader />;
  if (isError) return <h2>Error</h2>;
  let users = filterUsers(data, filterByFileld);
  if (search) users = filterBySearch(users, search);

  return (
    <div className="userList_container" style={{ padding: "0 1%" }}>
      {users.length ? (
        users.map((user, i) => (
          <Fragment key={user._id + user.email}>
            <SingleUser user={user} isDivider={i !== users.length - 1} />
          </Fragment>
        ))
      ) : (
        <NoUsersBox msg="No Users found" />
      )}
    </div>
  );
}
