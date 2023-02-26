import React from 'react'
import {useEffect, useState} from 'react'
import App from './App';

const Exam = () => {
    const [Records, setRecords] = useState(null)

//https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams

useEffect(()=> {
    const fetchRecords = async () => {
        const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        const json = await response.json()

        if (response.ok) {
            setRecords(json)

        }

    }
    fetchRecords()
}, [])

  return (
    <div>Exam</div>
  )
}

export default Exam