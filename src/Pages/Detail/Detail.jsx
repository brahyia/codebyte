import React from 'react'

import './Detail.scss'

const Detail = () => {
  return (
    <div className="detail">
      <h1>Detail</h1>
      <div className="container">
        <div className="patientColumn">
          <div className="patientInfo">Patient Info</div>
          <div className="idRow">
            <label className="idLabel">Patient ID:</label>
            <input type="text" className="patientId" value="AAAA"/>
          </div>
        </div>
        <div className="examInfo">

        </div>
      </div>
    </div>
  )
}

export default Detail