// import Search from "@mui/icons-material/Search";
// import {useEffect, useState} from 'react'
// import App from './App';
import React, { useEffect, useState } from 'react';
import './Exams.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exams = () => {
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
        <label>Search: </label>
        <input type={"text"} placeholder="" className='te'></input>
      </div>

      <table role="table" className="examPageTable">
        <thead className="tableHeaderRoot" >
          <tr className="headerRow">
              <th className="patientId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Patient ID<span></span></th>
              <th className="ExamId" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Exam ID<span></span></th>
              <th className="Image" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Image<span></span></th>
              <th className="KeyFindings" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Key Findings<span></span></th>
              <th className="BrixiaScore" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Brixia Score<span></span></th>
              <th className="Age" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Age<span></span></th>
              <th className="Sex" role="columnheader" scope="col" colspan="1" title="Toggle sort By">Sex<span></span></th>
              <th className="Bmi" role="columnheader" scope="col" colspan="1" title="Toggle sort By">BMI<span></span></th>
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
                                      <Link to={`/patient/${item._id}`}>
                                          <span>{item.patientId}</span>
                                      </Link>
                                  </td>
                                  <td className="examIdCells" role="cell">
                                      <Link to={`/patient/${item._id}`}>
                                          <span>{item.examId}</span>
                                      </Link>
                                  </td>
                                  <td className="ImageCells" role="cell">
                                      <img src={imgURL + item.pngFileName} alt="exam"/>
                                  </td>
                                  <td className="keyFindingsCells" role="cell">
                                      <span>{item.keyFindings}</span>
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

export default Exams