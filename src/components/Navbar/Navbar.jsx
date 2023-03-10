import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Navbar/Logo192.png"

import Language from "@mui/icons-material/Language";


// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams ....API Endpoint!


const Navbar = () => {




  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Link to={'/exams'}>
            <img src={Logo} alt=''></img>
          </Link>
        </div>

        <div className='links'>
          <Link className='link' to={'/exams'}>
            <h5>Exam</h5>
          </Link>
          <Link className='link' to={'/admin'}>
            <h5>Admin</h5>
          </Link>

          <span className='item'>
            <Language /> English
          </span>
          <span><Link to="./Login">Logout
          </Link>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Navbar