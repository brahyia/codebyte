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
    <div className="main">
      {/* <h1>Detail</h1> */}
      <div className="container">
        <div className="patientColumn">
          <div className="patientInfo">Patient Info</div>
          <div className="patientIdRow">
            <label className="patientIdLabel">Patient ID: </label>
            <input type="text" className="patientId" value={patient.exam?._id}/>
          </div>
          <div className="age">
            <label>Age: </label>
            <input type="text" className="ageValue" value={patient.exam?.age}/>
          </div>
          <div className="sex">
            <label>Sex: </label>
            <input type="text" className="sexValue" value={patient.exam?.sex}/>
          </div>
          <div className="BMI">
            <label>BMI: </label>
            <input type="text" className="BmiValue" value={patient.exam?.bmi}/>
          </div>
          <div className="zip">
            <label>ZipCode: </label>
            <input type="text" className="zipcode" value={patient.exam?.zipCode}/>
          </div>
        </div>
        <div className="examColumn">
          <div className="examInfo">Exam Info</div>
          <div className="examIdRow">
            <label className="examIdLabel">Exam ID: </label>
            <input type="text" className="examId" value={patient.exam?.examId}/>
          </div>
          <div className="examImageRow">
            <label>Image URL: </label>
            <input type="text" className="examUrl" value={patient.exam?.imageURL}/>
            <div className="examImage">
              <div>
              <img className="examImage" src={patient.exam?.imageURL} alt="Exam"/>
              </div>
            </div>
          </div>
          <div className="examDateRow">
            <label>Date: </label>
            <input type="text" className="examDate" value={patient.exam?.date}/>
          </div>
          <div className="keyFindingsRow">
            <label>KeyFindings: </label>
            <input type="text" className="keyFindings" value={patient.exam?.keyFindings}/>
          </div>
          <div className="brixiaScoreRow">
            <label>Brixia Score: (seperated by comma)</label>
            <input type="text" className="brixiaScore" value={patient.exam?.brixiaScores}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
