import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { fetchUsers } from "./features/usersSlice/usersSlice";

function App() {
  const { users, isLoading, error, isError, curPage } = useAppSelector(
    (store) => store.users
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers(`${1}`));
  }, []);

  if (isLoading) return <h2>loading</h2>;
  if (isError) return <h2>Error</h2>;

  // const users = data;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
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

export default App;
