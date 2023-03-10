import { useEffect, useState } from "react";

// components
// import PatientDetails from '../../components/PatientDetails'
import PatientDataGrid from "../../components/PatientDataGrid";

const AdminPage = () => {
  const [ records, setRecord ] = useState([])

  useEffect(() => {
    fetch("/api/patient_record/")
    .then((data) => data.json())
    .then((data) => setRecord(data))
  }, [])

  // console.log(records) debug code

  return (
    <PatientDataGrid 
      rows={records}
    />
  )
}




export default AdminPage