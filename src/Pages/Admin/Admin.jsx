// import Search from "@mui/icons-material/Search";
// import {useEffect, useState} from 'react'
// import App from './App';
import React, { useEffect, useState } from 'react';
import './Admin.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Admin = () => {
  const imgURL = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/";
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://codebyte-backend.onrender.com/api/patient_record/all_patient_records'
      );
      console.log("response.data[0]" + response.data[0]);
      setDetails(response.data);
      setLoading(true);
      console.log("response" + response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='main'>
      <div className='textt'>
      <Link to={'/exam/create'}>
      <button className='hello'>
        Create Exam
      </button>
      </Link>
      </div>

      <table role="table" className="examPageTable">
        <thead className="tableHeaderRoot" >
          <tr className="headerRow">
              <th className="patientId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Patient ID<span></span></th>
              <th className="ExamId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Exam ID<span></span></th>
              <th className="KeyFindings" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Mortality<span></span></th>
              <th className="BrixiaScore" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Brixia Score<span></span></th>
              <th className="Age" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Age<span></span></th>
              <th className="Sex" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Sex<span></span></th>
              <th className="Bmi" role="columnheader" scope="col"
              colspan="1" title="Toggle sort By">Weight<span></span></th>
              <th className="Bmi" role="columnheader" scope="col"
              colspan="1" title="Toggle sort By">BMI<span></span></th>
              <th className="Zip" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Zip Code<span></span></th>
          </tr>
        </thead>

        <div className="wrapper">
        {!loading ? (
          <p></p>
        ) : (
          <>
            {details &&
              details.exams?.map((item) => (
                          <tbody className="tableBodyRoot">
                              <tr className="tableRows" role="row">
                                  <td className="patientIdCells" role="cell">
                                      <Link className='Detail-Link' to={`/patient/${item._id}`}>
                                          <span>{item.patientId}</span>
                                      </Link>
                                  </td>
                                  <td className="examIdCells" role="cell">
                                      <Link className='Detail-Link' to={`/patient/${item._id}`}>
                                          <span>{item.examId}</span>
                                      </Link>
                                  </td>
                                  <td className="keyFindingsCells" role="cell">
                                      <span>{item.mortality}</span>
                                  </td>
                                  <td className="BrixiaCells" role="cell">
                                  <span>{item.brixiaScore}</span>
                                  </td>
                                  <td className="AgeCells" role="cell">
                                      <span>{item.age}</span>
                                  </td>
                                  <td className="SexCells" role="cell">
                                      <span>{item.sex}</span>
                                  </td>
                                  <td className="SexCells" role="cell">
                                      <span>{item.latestWeight}</span>
                                  </td>
                                  <td className="BmiCells" role="cell">
                                      <span>{item.latestBmi}</span>
                                  </td>
                                  <td className="ZipCells" role="cell">
                                      <span>{item.zip}</span>
                                  </td>
                              </tr>
                          </tbody>
              ))}
          </>
        )}
        </div>
      </table>
    </div>


  )
}

export default Admin
