import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Forms = () => {
  // const [title, setTitle] = useState('')
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
  const [error, setError] = useState(null)

  //connecting to the API and linking it to the Add exam button

  const AddExam = async (e) => {
    e.preventDefault()
    let message = 'Patient info is added to the form'
    window.alert(message)



    const examinput = {
      age, patientID, sex, bmi, zipcode, examID,
      imageURL, date, KeyFindings, brixia
    }

    const response = await fetch('/api/patient_record', {
      method: 'POST',
      body: JSON.stringify(examinput),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      return window.alert(json.error)
    }
    if (response.ok) {
      setAge('')



      setError(null)
      console.log('New Patient Info', json)
    }

  }
  const RandomExam = async (e) => {
    e.preventDefault()
    window.alert('Random Exam is working')

    const response = await fetch('/api/patient_record/all_patient_records', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log(json)
  }



  return (
    <div className='container-main'>
      <div className='containerr'>
        <div className='text-contents'>
          <h1>Create Exam</h1>
        </div>
        <div className='button-contents'>
          {/* <Link to={'/'}> */}
          <button className='btn-primary' onClick={AddExam}> Add Exam
          </button>
          {error && <div className='error'></div>
          }
          {/* </Link> */}

          <button className='btn-primary' onClick={RandomExam}>Random Exam</button>
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






      </div>

    </div>
  )
}

export default Forms