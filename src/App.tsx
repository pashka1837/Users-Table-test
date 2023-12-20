import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayot, Landing } from "./Pages/index";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import PageError from "./Pages/PageError.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayot />,
    errorElement: <PageError />,
    children: [
      {
        path: "/page",
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
