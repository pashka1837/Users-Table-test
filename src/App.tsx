import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayot, Landing } from "./Pages/index";
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
