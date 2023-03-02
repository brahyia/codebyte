import React from 'react'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';

const Admin = () => {
  return (
   <div>
    <div className='bcontainer'>
      <Link to={'/exam/create'}>
      <button className='hello'>
        Create Exam
      </button>
      </Link>
      
    </div>
   </div>
    
  )
}

export default Admin
  