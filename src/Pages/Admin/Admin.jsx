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

      <table role = "table" className='AdminPageTable'>
        <thead className='TableHeaderRoot'>
          <tr className='HeaderRow'>
            <th className="patientId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Patient ID<span></span></th>
            <th className="ExamId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Exam ID<span></span></th>
            <th className="KeyFindings" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Key Findings<span></span></th>
            <th className="BrixiaScore" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Brixia Score<span></span></th>
            <th className="Age" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Age<span></span></th>
            <th className="Sex" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Sex<span></span></th>
            <th className="Bmi" role="columnheader" scope="col" colspan="1" title="Toggle sort By">BMI<span></span></th>
            <th className="Zip" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Zip Code<span></span></th>
          </tr>
          </thead> 
      </table>
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
  