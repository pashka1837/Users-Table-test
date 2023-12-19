import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUsers } from "../../features/usersSlice/usersSlice";

export default function Landing() {
  const { users, isLoading, error, isError, curPage } = useAppSelector(
    (store) => store.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers(`${curPage}`));
  }, []);

  if (isLoading) return <h2>loading</h2>;
  if (isError) return <h2>Error</h2>;

  // const users = data;

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users &&
          users.map((user, i) => (
            <li key={user._id + user.email}>
              {i + 1}: {user.firstName}
            </li>
          ))}
      </ul>
    </>
  );
}
