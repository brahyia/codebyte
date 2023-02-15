const express = require('express')
const {   
  getAllRecords,
  getPatientRecord,
  createPatientRecord,
  deletePatientRecord,
  updatePatientRecord 
} = require('../controller/patientController')


const router = express.Router()


// GET all patient records in the database
router.get('/', getAllRecords)

// GET one patient's record
router.get('/:PATIENT_ID', getPatientRecord)

// POST a new patient record
router.post('/', createPatientRecord)

// DELETE a new patient record
router.delete('/:id', deletePatientRecord)

// UPDATE a patient record
router.patch('/:id', updatePatientRecord)

// this will export all of our routes so that they may be used else where.
module.exports = router
