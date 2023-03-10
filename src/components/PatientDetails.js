const PatientDetails = ({ record }) => {
  return (
    <div className="patient-details">
      <h4>{record.PATIENT_ID}</h4>
      <p><strong>Age: </strong>{record.AGE}</p>
      <p><strong>Sex: </strong>{record.SEX}</p>
      <p><strong>ZIP: </strong>{record.ZIP}</p>
      <p><strong>LATEST_BMI: </strong>{record.LATEST_BMI}</p>
      <p><strong>exam_Id: </strong>{record.exam_Id}</p>
    </div>
  )
}

export default PatientDetails