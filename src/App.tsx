import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayot, Landing, PageError } from "./Pages/index";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/Users-Table-test",
  }
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
