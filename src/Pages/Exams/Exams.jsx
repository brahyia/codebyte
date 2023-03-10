import React from 'react'
import { useEffect, useState } from 'react'
import Exam from '../Exam'
// import Search from "@mui/icons-material/Search";

// import App from './App';

const Exams = () => {
  const [Data, setData] = useState(null)

  const ApiUrl = 'https://codebyte-backend.onrender.com/api/patient_record/all_patient_records'

  //https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

  useEffect(() => {
    function pulldata() {
      fetch(ApiUrl)
        .then(response => response.json())
        .then(responseData => setData(responseData))
    }

    // .then(responseData => {
    //   displayData = responseData.map(function (patientinfo) {

    //     return (
    //       <p key={patientinfo.id}>{patientinfo.age}</p>
    //     )
    //   })
    //   console.log(responseData)
    //   setData(displayData)

    pulldata()
  }, []);

  console.log(Data)

  return (
    <div>
      <div className='textt'>
        <label>Search: </label>
        <input type={"text"} placeholder="" className='te'></input>

      </div>
      <Exam Data={Data} />
    </div>

  )
}

export default Exams