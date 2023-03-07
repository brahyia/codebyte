import React from 'react'



const Index = ({ Data }) => {
  return (
    <React.Fragment>
      {Data && Data.exams.map(function (patientinfo) {

        return (
          <div key={patientinfo.id}>
            <p >{patientinfo.age}</p>
            <img src={patientinfo.imageURL} alt=''></img>
            <p>{patientinfo.bmi}</p>
          </div>


        )
      })};
    </React.Fragment>
  )
}

export default Index