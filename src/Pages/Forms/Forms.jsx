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
              <div className = 'C'>
              <label className='H'>Age:</label>
              <input type={'text'} className='form-control1'></input>
            </div>

            <div className = 'D'>
              <label className='I'>Image URL:</label>
              <input type={'text'} className='form-control2'></input>
            </div>

            <div className = 'E'>
              <label className = 'J'>Sex:</label>
              <input type= {'text'} className='form-control3'></input>
            </div>

            <div className = 'F'>
              <label className = 'K'>Date:</label>
              <input type= {'text'} className='form-control4'></input>
            </div>

            <div className = 'G'>
              <label className='L'>BMI:</label>
              <input type= {'text'} className='form-control5'></input>
            </div>
            
            <div className = 'H'>
              <label className='M'>Key Findings:</label>
              <input type = {'text'} className='form-control6'></input>
            </div>

            <div className = 'I'>
              <label className='N'>ZipCode:</label>
              <input type = {'text'} className='form-control7'></input>
            </div>

            <div className = 'J'>
              <label className='O'>Brixia Score: (Separated by a comma)</label>
              <input type = {'text'} className='form-control8'></input>
            </div>



            
            
        </div>
    </div>
  )
}

export default Forms