import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayot from "./Pages/HomeLayout/HomeLayot";
import Landing from "./Pages/Landing/Landing";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayot />,
    children: [
      {
        path: "/page/:page",
        element: <Landing />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
