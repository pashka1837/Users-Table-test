import { Fragment } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import SingleUser from "./SingleUser";
import { filterBySearch, filterUsers } from "../utils/filter";
import NoUsersBox from "./NoUsersBox";
import { useLocation } from "react-router-dom";
import { useQueryStateResult } from "../services/usersApi";
import { Loader } from ".";

export default function UsersList() {
  const { filterByFileld, search: filterByInput } = useAppSelector(
    (store) => store.users
  );
  const { search: urlSearch } = useLocation();
  const { data, isFetching } = useQueryStateResult(urlSearch || "?page=1");

  if (isFetching) return <Loader />;

  let users = filterUsers(data!.users, filterByFileld);
  if (filterByInput) users = filterBySearch(users, filterByInput);

  return (
    <div style={{ padding: "0 1%" }}>
      {users.length ? (
        users.map((user, i) => (
          <Fragment key={user._id + user.email}>
            <SingleUser
              isFunc={true}
              user={user}
              isDivider={i !== users.length - 1}
            />
          </Fragment>
        ))
      ) : (
        <NoUsersBox msg="No Users found" />
      )}
    </div>
  );
}
