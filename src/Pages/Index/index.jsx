import React from 'react'
import Search from "@mui/icons-material/Search";


const Index = () => {
  return (
    <div>
      <div className='container'>
        <div className='search'>
        <Search/>
        <input type={"text"} placeholder="Search..."></input>
        </div>
    </div>
    </div>
  )
}

export default Index