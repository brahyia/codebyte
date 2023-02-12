import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Index from "./Pages/Index/Index";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Navbar from "./components/Navbar/Navbar";
import "./Pages/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";

const Layout = ()=> {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
 }


const router = createBrowserRouter([

  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "admin",
    element: <Admin/>,
  },
  {
    path: "detail",
    element: <Detail/>,
  },
  {
    path: "index",
    element: <Index/>,
  },
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
