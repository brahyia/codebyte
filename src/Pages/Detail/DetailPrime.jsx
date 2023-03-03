import React from 'react'

import './Detail.scss'

const Detail = () => {
  return (
    <div>
    {/* <nav src="navbar.jsx"></nav> */}
    <body/> 
    /* Below I made a table to display the patient info and exam info 
    //I want to then 
           <table class ="table"/>
        <thead/>
          <tr>
            <th scope="col"></th>
            <th scope="col">Patient Info:</th>
            <th scope="col">Exam Info:</th>
          </tr>
            <thead/>
            <tbody/>
            <tr>
              <th scope='row'></th>
                <td>Sex:</td>
                <td>Date:</td>
                </tr>
                <th scope='row'></th>
                <td>Age:</td> 
                <td>Image:</td>
                <tr>
                <th scope='row'></th>
                <td>BMI:</td>
                </tr>
                <tbody/>
                <table/>
    <body/>
    </div>
  )
}

export default Detail