import React from 'react'
import Search from "@mui/icons-material/Search";
// import {useEffect, useState} from 'react'
// import App from './App';

const Exams = () => {

  return (
    <div>
      <div className='search'>
        <Search/>
        </div>
        <div className='text'>
        <input type={"text"} placeholder="Search..."></input>
        </div>

    </div>
    
  )
}

export default Exams