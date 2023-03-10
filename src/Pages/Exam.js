import React from 'react'
import { Link } from 'react-router-dom'



const Exam = ({ Data }) => {

    return (

        <React.Fragment>

            <div>
                <table className='extable'>
                    <thead>
                        <tr>
                            <th>ID</th>

                            <th>EXAMID</th>

                            <th>IMAGE</th>

                            <th>AGE</th>
                            <th>BMI</th>

                            <th>Sex</th>

                            <th>ADMIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data && Data.exams.map(function (patientinfo) {
                            return (
                                <tr key={patientinfo.id}>
                                    <td>{patientinfo._id}</td>

                                    <td>{<Link>{patientinfo.examId}</Link>}</td>
                                    <td>{<img src={`https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${patientinfo.pngFileName}`}
                                        alt='' className='patientinfoImage'></img>}</td>
                                    <td>{patientinfo.age}</td>
                                    <td>{patientinfo.latestBmi}</td>
                                    <td>{patientinfo.sex}</td>

                                    <td>{patientinfo.icuAdmit}</td>

                                </tr>
                            )
                        })};


                    </tbody>
                </table>


            </div>


        </React.Fragment >

    )
}

export default Exam