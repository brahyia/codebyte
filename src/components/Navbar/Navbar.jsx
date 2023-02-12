import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Navbar/brest.png"
import getAllRecords from "."
// https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams


const Navbar = async  () => {
  const fetchExam = async () => {
    const res = await fetch(`https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams`).then(res => res.json()
  },
  console.log(res)
  cona

  React.useEffect(() => {
    console.log("test")
    )
  })
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt=''></img>
        </div>
        <div className='links'>
          <Link className='link' to={'/?cat=art'}>
          <h5>Resources</h5>
          </Link>
          <Link className='link' to={'/?cat=about'}>
          <h5>About Breast Cancer</h5>
          </Link>
          <Link className='link' to={'/?cat=findSupport'}>
          <h5>Find Support Near You</h5>
          </Link>

          <span>username</span>
          <span>Logout</span>
  
        </div>
      </div>
    </div>
  )
}

export default Navbar