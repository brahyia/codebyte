import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { useState, useEffect } from "react";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forms from "./Pages/Forms/Forms";
import Exams from "./Pages/Exams/Exams";
// import Index from "./Pages/Index/Index";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
// import AsyncAwait from "./Pages/Reac/AsyncAwait";



import "./Pages/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";
import MoreDetails from "./Pages/Detail/MoreDetails";
import PatientDetails from "./Pages/Detail/MoreDetails";
import Exams2 from "./Pages/Exams/FixedExams";
import "./Pages/Admin/Admin.scss"
import "./Pages/Exams/Exams.scss"
import "./Pages/Forms/Forms.scss"

//This is me attepting to load data in the app page!


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />

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
    element: <Layout />,
    children: [
      // {
      //   path : "/",
      //    element: <Index/> 
      // }, 
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/exams",
        element: <Exams />,
      },
      {
        path: "/exam/create",
        element: <Forms />,
      },
      {
        path: "/Patient/:id",
        element: <MoreDetails/>,
      },
      {
        path: "/exams2",
        element: <Exams2/>,
      },
    ]   
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/async",
  //   element: <AsyncAwait />,
  // },




]);

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:4000/api/patient_record")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div>
      {/* <Navbar/> */}
      <div className="App">

        <div className="container">
          <RouterProvider router={router}></RouterProvider>
          {/* <h1>{message}</h1> */}

        </div>
      </div>

    </div>

  );
}

export default App;

