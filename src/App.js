import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import React, { useState, useEffect } from "react";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Forms from "./Pages/Forms/Forms";
import Exams from "./Pages/Exams/Exams";
// import Index from "./Pages/Index/Index";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
// import Exam from "./Pages/Exam";
// import AsyncAwait from "./Pages/Reac/AsyncAwait";



import "./Pages/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";
import "./Pages/Admin/Admin.scss"
import "./Pages/Exams/Exams.scss"
import "./Pages/Forms/Forms.scss"
import "./Pages/Exam.scss"
import "./Pages/AdminTable.scss"
import "./Pages/Detail/Detail.scss"


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
  // const [Data, setData] = useState(null)

  // const ApiUrl = 'https://codebyte-backend.onrender.com/api/patient_record/all_patient_records'

  // //https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

  // useEffect(() => {
  //   function pulldata() {
  //     fetch(ApiUrl)
  //       .then(response => response.json())
  //       .then(responseData => setData(responseData))
  //   }

  //   // .then(responseData => {
  //   //   displayData = responseData.map(function (patientinfo) {

  //   //     return (
  //   //       <p key={patientinfo.id}>{patientinfo.age}</p>
  //   //     )
  //   //   })
  //   //   console.log(responseData)
  //   //   setData(displayData)

  //   pulldata()
  // }, []);

  // console.log(Data)
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
          {/* <Exam Data={Data} /> */}
          {/* <h1>{message}</h1> */}

        </div>
      </div>

    </div>

  );
}

export default App;

