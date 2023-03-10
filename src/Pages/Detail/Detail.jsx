import React, { useEffect, useState } from 'react';
import './Detail.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Detail = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://codebyte-backend.onrender.com/api/patient_record/all_patient_records'
      );
      setDetails(response.data);
      console.log(response)
      setLoading(true);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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
  );
};

export default Detail;