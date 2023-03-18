import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const PatientDetails = () => {
  const imgURL = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/";
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [patient, setPatient] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://codebyte-backend.onrender.com/api/patient_record/byId/${id}`
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
    <div className="detail">
      {/* <h1>Detail</h1> */}
      <div className="container">
        <div className="patientColumn">
          <div className="patientInfo">Patient Info</div>
          <div className="patientIdRow">
            <label className="patientIdLabel">Patient ID: </label>
            <input type="text" className="patientId" value={patient.exams?._id}/>
          </div>
          <div className="age">
            <label>Age: </label>
            <input type="text" className="ageValue" value={patient.exams?.age}/>
          </div>
          <div className="sex">
            <label>Sex: </label>
            <input type="text" className="sexValue" value={patient.exams?.sex}/>
          </div>
          <div className="BMI">
            <label>BMI: </label>
            <input type="text" className="BmiValue" value={patient.exams?.latestBmi}/>
          </div>
          <div className="zip">
            <label>ZipCode: </label>
            <input type="text" className="zipcode" value={patient.exams?.zip}/>
          </div>
        </div>
        <div className="examColumn">
          <div className="examInfo">Exam Info</div>
          <div className="examIdRow">
            <label className="examIdLabel">Exam ID: </label>
            <input type="text" className="examId" value={patient.exams?.examId}/>
          </div>
          <div className="examImageRow">
            <label>Image URL: </label>
            <input type="text" className="examUrl" value={patient.exams?.pngFileName}/>
            <div className="examImage">
              <div>
              <img className="examImage" src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.exams?.pngFileName} alt="Exam"/>
              </div>
            </div>
          </div>
          <div className="examDateRow">
            <label>Date: </label>
            <input type="text" className="examDate" value={patient.exams?.date}/>
          </div>
          <div className="keyFindingsRow">
            <label>KeyFindings: </label>
            <input type="text" className="keyFindings" value={patient.exams?.keyFindings}/>
          </div>
          <div className="brixiaScoreRow">
            <label>Brixia Score: (seperated by comma)</label>
            <input type="text" className="brixiaScore" value={patient.exams?.brixiaScore}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
