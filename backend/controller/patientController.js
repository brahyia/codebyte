const Patient = require('../models/patientModel')
const mongoose = require('mongoose')


// get all patient records in the database
const getAllRecords = async (req, res) => {
  try {
    const patients = await Patient.find({}).sort({createdAt: -1})
    res.status(200).json(patients)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// get one patient's record
const getPatientRecord = async (req, res) => {
  const { PATIENT_ID } = req.params
  console.log(req.params.PATIENT_ID) // debug

    // this will get the key _id from the mongoDB record 
    // Not necessary for now
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({error: 'Invalid patient ID'})
    // }

    const patientRecord = await Patient.find({'PATIENT_ID': PATIENT_ID})
    // console.log(patientRecord)

    // if patient id does not exist a 404 error will be produced
    if (!patientRecord) {
      return res.status(404).json({error: "Invalid patient ID"})
    }

    res.status(200).json({patientRecord})
}


// create a new patient record
const createPatientRecord = async (req, res) => {
  const {name, id} = req.body

  // add new patient record to the database
  try {
    const patientRecord = await Patient.create({name, id})
    res.status(200).json(patientRecord)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// delete a new patient record
const deletePatientRecord = async (req, res) => {
  // this gets the `req` parameter above
  const { id } = req.params

  // check if the input ID value is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid patient ID'})
  }

  const patientRecord = await Patient.findOneAndDelete({_id: id})

  // if patient id does not exist a 404 error will be produced
  if (!patientRecord) {
    return res.status(400).json({error: "Invalid patient ID"})
  }

  res.status(200).json(patientRecord)
}

// update a patient record
const updatePatientRecord = async (req, res) => {
    // this gets the `req` parameter above
    const { id } = req.params

      // check if the input ID value is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid patient ID'})
  }

  const patientRecord = await Patient.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!patientRecord) {
    return res.status(400).json({error: "Invalid patient ID"})
  }

  res.status(200).json(patientRecord)
}


// export functions so that they may be used with the routes
module.exports = {
  getAllRecords,
  getPatientRecord,
  createPatientRecord,
  deletePatientRecord,
  updatePatientRecord
}