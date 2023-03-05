import React from 'react';
import Header from '../../components/Header';

import './admin.css';

const mockData = [
    {
        patientId: '1234563',
        age: '4',
        sex: 'M',
        zip: '736363',
        latestBmi: '20',
        latestWeight: '79',
        png: 'shshshsh',
        examId: '252553553',
        icuAdmit: 'Yes',
        icuAdmits: '20',
        mortality: '50',
    },
    {
        patientId: '1234563',
        age: '4',
        sex: 'M',
        zip: '736363',
        latestBmi: '20',
        latestWeight: '79',
        png: 'shshshsh',
        examId: '252553553',
        icuAdmit: 'Yes',
        icuAdmits: '20',
        mortality: '50',
    },
    {
        patientId: '1234563',
        age: '4',
        sex: 'M',
        zip: '736363',
        latestBmi: '20',
        latestWeight: '79',
        png: 'shshshsh',
        examId: '252553553',
        icuAdmit: 'Yes',
        icuAdmits: '20',
        mortality: '50',
    },
];

const Table = () => (
    <div className='table'>
        <table>
            <tr>
                <th>Patient ID</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Zip</th>
                <th>BMI</th>
                <th>Weight</th>
                <th>PNG</th>
                <th>Exam ID</th>
                <th>ICU Admit</th>
                <th>ICU Admits</th>
                <th>Mortality</th>
            </tr>
            {mockData.map((data) => (
                <tr>
                    <td>{data.patientId}</td>
                    <td>{data.age}</td>
                    <td>{data.sex}</td>
                    <td>{data.zip}</td>
                    <td>{data.latestBmi}</td>
                    <td>{data.latestWeight}</td>
                    <td>{data.png}</td>
                    <td>{data.examId}</td>
                    <td>{data.icuAdmit}</td>
                    <td>{data.icuAdmits}</td>
                    <td>{data.mortality}</td>
                </tr>
            ))}
        </table>
    </div>
);

const Admin = () => (
    <div>
        <Header />
        <div className='admin'>
            <div className='content'>
                <div className="create_btn_wrap">
                    <button>create exam</button>
                </div>
                <div className='search_bar_wrap'>
                    <div className="search_bar">
                        <label>Search:</label>
                        <input placeholder='search here..' />
                    </div>
                </div>
                <Table />
            </div>
        </div>
    </div>
);

export default Admin;
