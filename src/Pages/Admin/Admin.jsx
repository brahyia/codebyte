import React from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';

const Admin = () => {
  return (
   <div className='container'>
    <div className='bcontainer'>
      <Link to={'/exam/create'}>
      <button className='hello'>
        Create Exam
      </button>
      </Link>
      
      {/* <div>
      <div className='addm'>
        <label>Search: </label>
        <input type={"text"} placeholder="" className='te'></input>
      </div>
    </div> */}

    </div>
   </div>
    
  )
}

export default Admin
  