import "styles/global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

import Home from "pages";

function App(): JSX.Element {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
