// import React from 'react'
// import { useEffect, useState } from 'react';
// import Index from '../Index';

// const AsyncAwait = () => {
//     const [Data, setData] = useState(null)

//     const ApiUrl = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'


//     useEffect(() => {
//         function pulldata() {
//             fetch(ApiUrl)
//                 .then(response => response.json())
//                 .then(responseData => setData(responseData))
//         }

//         // .then(responseData => {
//         //   displayData = responseData.map(function (patientinfo) {

//         //     return (
//         //       <p key={patientinfo.id}>{patientinfo.age}</p>
//         //     )
//         //   })
//         //   console.log(responseData)
//         //   setData(displayData)

//         pulldata()
//     }, []);

//     console.log(Data)

//     return (
//         <div className="App">
//             Hello There New App!
//             <main className='main'>
//                 <h1>Posts from API</h1>


//                 <Index Data={Data} />
//             </main>

//         </div>
//     )
// }

// export default AsyncAwait