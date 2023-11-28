import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Auth/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import NotFound from "./Components/NotFound/NotFound";

let roy = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "Rigister", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={roy} />
    </>
  );
}

export default App;
