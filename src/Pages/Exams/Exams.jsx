// import Search from "@mui/icons-material/Search";
// import {useEffect, useState} from 'react'
// import App from './App';
import React, { useEffect, useState } from 'react';
import './Exams.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Exams = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'
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
    <div>
      <div className='textt'>
        <label>Search: </label>
        <input type={"text"} placeholder="" className='te'></input>

      </div>
      <div className="wrapper">
      {!loading ? (
        <p></p>
      ) : (
        <>
          {details &&
            details.exams?.map((item) => (
                     <ul key={item._id} className="list">
                      
                      <li>{item.examId}</li>
                      <li>Patient Id: {item.patientId}</li>
                    
                <li className="button">
                  <Link to={`/patient/${item._id}`}>
                    <button>View Details</button>
                  </Link>
                </li> 
                </ul> 
            ))}
        </>
      )}
    </div>
      

    </div>

  )
}

export default Exams