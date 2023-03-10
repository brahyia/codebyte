import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AdminTable from '../AdminTable'
// import Button from 'react-bootstrap/Button';
// import App from '../../App'

const Admin = () => {
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
      <div className='bcontainer'>
        <Link to={'/exam/create'}>
          <button className='hello'>
            Create Exam
          </button>
        </Link>
        {/* <Exam Data={Data} /> */}

      </div>
      <AdminTable Data={Data} />
    </div>


  )
}

export default Admin
