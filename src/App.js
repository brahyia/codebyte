import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Index from "./Pages/Index/Index";
import Admin from "./Pages/Admin/Admin";
import Detail from "./Pages/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";

import "./Pages/Login/Login.scss";
import "./components/Navbar/Navbar.scss";
import "./styles.scss";


//This is me attepting to load data in the app page!


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
    children:[
      {
        path : "/",
         element: <Index/> 
      }, 
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/detail",
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
  
  
]);

function App() {

//This is me attepting to load data in the app page!

  // const [data,setData]=useState([]);
  // const getData = () => {
  //   fetch('generate.json', {
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept' : 'application/json'
  //     }
  //   }
  //   )
  //   .then(function(response){
  //     console.log(response)
  //     return response.json();
  //   })
  //   .then(function(myJson){
  //     console.log(myJson);
  //     setData(myJson)
  //   });
  // }
  // useEffect(()=>{
  //   getData()
  // }, [])


  return (
    <div className="App">
      
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
        
      </div>
    </div>
  );
}

export default App;

