import React from 'react'

const AdminTable = ({ Data }) => {
    return (
        <React.Fragment>

            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>AGE</th>
                            <th>BMI</th>

                            {/* <th>BRIXIASCORES</th> */}
                            <th>EXAMID</th>

                            {/* <th>IMAGE</th> */}
                            {/* <th>KEYFINDINGS</th> */}
                            {/* <th>patientID</th> */}
                            <th>Sex</th>
                            {/* <th>zipCode</th> */}
                            <th>ADMIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data && Data.exams.map(function (patientinfo) {
                            return (
                                <tr key={patientinfo.id}>
                                    <td>{patientinfo._id}</td>
                                    <td>{patientinfo.age}</td>
                                    <td>{patientinfo.latestBmi}</td>
                                    <td>{patientinfo.examId}</td>
                                    {/* <td>{<img src={patientinfo.pngFileName} alt=''></img>}</td> */}
                                    {/* <td>{patientinfo.brixiaScores}</td> */}
                                    {/* <td>{patientinfo.pngFileName}</td> */}

                                    {/* <td>{patientinfo.keyFindings}</td> */}
                                    {/* <td>{patientinfo.patientId}</td> */}
                                    <td>{patientinfo.sex}</td>
                                    {/* <td>{patientinfo.zipCode}</td> */}
                                    <td>{patientinfo.icuAdmit}</td>
                                    <td>{<button className='upd'>update</button>}</td>
                                    <td>{<button className='del'>delete</button>}</td>

                                </tr>
                            )
                        })};


                    </tbody>
                </table>

                {/* <p >{patientinfo.age}</p>
                        <img src={patientinfo.imageURL} alt=''></img>
                        <p>{patientinfo.bmi}</p> */}
            </div>


        </React.Fragment>

    )
}

// <div>AdminTable</div>


export default AdminTable