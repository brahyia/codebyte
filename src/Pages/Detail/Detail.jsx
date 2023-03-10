
import React, { useState } from 'react'

const Detail = () => {
  const [age, setAge] = useState('')
  const [patientID, setPatientID] = useState('')
  const [sex, setSex] = useState('')
  const [bmi, setBMI] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [examID, setExamID] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [date, setDate] = useState('')
  const [KeyFindings, setKeyFindings] = useState('')
  const [brixia, setBrixia] = useState('')

  return (
    <div>
      <div className='BCD'>
        <div className='CDE'>
          <div className='DEF'>Patient Info </div>
          <div>
            <label className='a'>Patient Id: </label>
            <input type={'text'} className='aa'
              onChange={(e) => setPatientID(e.target.value)} value={patientID}></input>
          </div>
          <div>
            <label className='AB'>Age: </label>
            <input type={'number'} className='ab'
              onChange={(e) => setAge(e.target.value)} value={age}></input>
          </div>
          <div>
            <label className='BC'>Sex: </label>
            <input type={'text'} className='bc'
              onChange={(e) => setSex(e.target.value)} value={sex}></input>
          </div>
          <div>
            <label className='CD'>BMI: </label>
            <input type={'number'} className='bb'
              onChange={(e) => setBMI(e.target.value)} value={bmi}></input>
          </div>

          <div>
            <label className='DE'>Zipcode: </label>
            <input type={'number'} className='cd'
              onChange={(e) => setZipcode(e.target.value)} value={zipcode}></input>
          </div>


        </div>

        <div className='TY'>
          <div className='PY'>Exam Info</div>
          <div>
            <label className='LY'>Exam ID: </label>
            <input type={'text'} className='bo'
              onChange={(e) => setExamID(e.target.value)} value={examID}>
            </input>
          </div>
          <div>
            <label className='GY'>Image URL: </label>
            <input type={'text'} className='go'
              onChange={(e) => setImageURL(e.target.value)} value={imageURL}></input>
          </div>
          <div>
            <label className='FY'>Date: </label>
            <input type={'text'} className='ho'
              onChange={(e) => setDate(e.target.value)} value={date}></input>
          </div>

          <div>
            <label className='MY'>KeyFindings: </label>
            <input type={'text'} className='mo'
              onChange={(e) => setKeyFindings(e.target.value)} value={KeyFindings}></input>
          </div>

          <div>
            <label className='HY'>Brixia Score: (separated by comma) </label>
            <input type={'text'} className='lo'
              onChange={(e) => setBrixia(e.target.value)} value={brixia}></input>
          </div>


        </div>
      </div>

    </div>






    // <div>Detail</div>
  )
}

export default Detail