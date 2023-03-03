import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const PatientDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://czi-covid-lypkrzry4q-uc.a.run.app/api/exam/${id}`
      );
      setPatient(response.data);
      setLoading(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(patient, 'patient');

  useEffect(() => {
    fetchData();
  }, []);

  if (!loading) {
    return <p></p>;
  }
  return (
    <div className="wrapper">
      <h2>Patient Details</h2>
      <ul className="list">
        <li>ID: {patient.exam?._id}</li>
        <li>Sex: {patient.exam?.sex}</li>
        <li>Age: {patient.exam?.age}</li>
        <li>Patient Id: {patient.exam?.patientId}</li>
        <li>Zip Code: {patient.exam?.zipCode}</li>
        <li>BMI: {patient.exam?.bmi}</li>
        <li>Exam Id: {patient.exam?.examId}</li>
        <li>Key Findings: {patient.exam?.keyFindings}</li>
        <li>Brixia Scores: {patient.exam?.brixiaScores}</li>
        <li>
          <img
            src={patient.exam?.imageURL}
            alt={'patient'}
            style={{
              width: '350px',
              height: '350px',
              cursor: 'pointer',
            }}
          />
        </li>
      </ul>
    </div>
  );
};

export default PatientDetails;
