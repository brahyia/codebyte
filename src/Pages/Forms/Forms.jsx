import React from 'react'
import { Link } from 'react-router-dom'
const Forms = () => {
  return (
    <div className='container-main'>
        <div className='containerr'>
            <div className='text-contents'>
            <h1>Create Exam</h1>
            </div>
            <div className='button-contents'>
            <button className='btn-primary'> Add Exam </button>
            <button className='btn-primary'>Random Exam</button>
            <Link to={'/exams'}>
            <button className='btn-danger'>Cancel</button>
            </Link>
            </div>
            <div className='patient-info'>
              <h3>Patient Info</h3>
              <h3>Exam Info</h3>
            </div>
            
            <div className='B'>
              <label className='T'>Patient ID:</label>
              <label className='G'>Exam ID:</label>
              </div>
              <div>
              <input type={'text'} className='form-control' ></input>
              </div>
              
            
            
        </div>
    </div>
  )
}

export default Forms