import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      console.log(res);
      const data = await res.json();
      console.log(data);
      setUsers(data.users);
    }
    fetchUsers();
  }, []);
  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       setUsers(json.users);
  //     });
  // }, []);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users.map((user) => (
          <li key={user._id + user.email}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
