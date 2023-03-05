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
        <div>
          <div className='BCD'>
            <div className='CDE'>
              <div className='DEF'>Patient Info </div>
              <div>
                <label className='a'>Patient Id: </label>
                <input type={'text'} className='aa' ></input>
              </div>
              <div>
                <label className='AB'>Age: </label>
                <input type={'text'} className='ab'></input>
              </div>
              <div>
                <label className='BC'>Sex: </label>
                <input type={'text'} className='bc' ></input>
              </div>
              <div>
                <label className='CD'>BMI: </label>
                <input type={'text'} className='bb' ></input>
              </div>

              <div>
                <label className='DE'>Zipcode: </label>
                <input type={'text'} className='cd'></input>
              </div>


            </div>

            <div className='TY'>
              <div className='PY'>Exam Info</div>
              <div>
                <label className='LY'>Exam ID: </label>
                <input type={'text'} className='bo'></input>
              </div>
              <div>
                <label className='GY'>Image URL: </label>
                <input type={'text'} className='go'></input>
              </div>
              <div>
                <label className='FY'>Date: </label>
                <input type={'text'} className='ho'></input>
              </div>

              <div>
                <label className='MY'>KeyFindings: </label>
                <input type={'text'} className='mo'></input>
              </div>

              <div>
                <label className='HY'>Brixia Score: (separated by comma) </label>
                <input type={'text'} className='lo'></input>
              </div>


            </div>
          </div>

        </div>

        {/* <div className='B'>
              <label className='T'>Patient ID:</label>
              <label className='G'>Exam ID:</label>
              </div>
              <div>
              <input type={'text'} className='form-control' ></input>
              </div> */}




      </div>
    </div>
  )
}

export default Forms