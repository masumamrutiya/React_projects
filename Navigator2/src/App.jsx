import Counter from "./Componets/Counter";
import List from "./Componets/List";
import Navbar from "./Componets/Navbar";
import Todo from "./Componets/Todo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Todo />
        </>
      ),
    },
    {
      path: "/list",
      element: (
        <>
          <Navbar />
          <List />
        </>
      ),
    },
    {
      path: "/counter",
      element: (
        <>
          <Navbar />
     
          <Counter/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
