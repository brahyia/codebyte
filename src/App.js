import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Index from "./Pages/Index/index";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./Pages/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";
import MoreDetails from "./Pages/Detail/MoreDetails";

const Layout = ()=> {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
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
    children:[
      {
        path : "/",
         element: <Index/> 
      }, 
      {
        path: "/Admin",
        element: <Admin/>,
      },
      {
        path: "/Detail",
        element: <Detail/>,
      },
     
    ]   
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
    path: '/Patient/:id',
    element: <MoreDetails />,
  },
  
  
]);

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
