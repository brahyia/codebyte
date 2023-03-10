const Patient = require('../models/patientModel')
const mongoose = require('mongoose')

// get all patient records in the database
const getAllRecords = async (req, res) => {
  try {
    const patients = await Patient.find({}).sort({ createdAt: -1 })
    res.status(200).json(patients)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// get a single patient record
// to-do: decide which data is needed
const getPatientRecord = async (req, res) => {
  // destructuring: req.params.PATIENT_ID
  const { patientId } = req.params
  console.log(req.params)

  // These are all the fields that will be returned in the query.
  // The fields are separated by spaces. 
  const fieldsToSelect = 'patientId age sex zip latestBmi latestWeight \
  pngFileName examId icuAdmit numIcuAdmissions mortality'

  const patientRecord = await Patient

    .findOne({patientId: patientId})

    .select(fieldsToSelect)

  
  console.log(patientRecord)

  // if patient id does not exist a 404 error will be produced
  if (!patientRecord) {
    return res.status(404).json({ error: "Invalid patient ID" })
  }

  res.status(200).json(patientRecord)
  // console.log(patientRecord);
}

// create a new patient record
// add new patient record to the database
const createPatientRecord = async (req, res) => {
  const { name, id } = req.body
  console.log({ name, id, body: req.body, bodytype: typeof req.body })

  // console.log(name + " " + id)
  console.log(req.body)

  try {
    const patientRecord = await Patient.create(req.body)
    console.log(patientRecord)
    res.status(200).json(patientRecord)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// delete a patient record
const deletePatientRecord = async (req, res) => {
  // this gets the `req` parameter above
  const { id } = req.params
  console.log(req.params)

  // check if the input ID value is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid patient ID' })
  }

  const patientRecord = await Patient.findOneAndDelete({ _id: id })
  console.log(patientRecord)

  // if patient id does not exist a 404 error will be produced
  if (!patientRecord) {
    return res.status(400).json({ error: "Invalid patient ID" })
  }

  res.status(200).json(patientRecord)
}

// update a patient record
const updatePatientRecord = async (req, res) => {

    // this gets the `req` parameter above
    const { id } = req.params
    console.log(id);
    console.log(req.body);


  // check if the input ID value is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid patient ID' })
  }

  const patientRecord = await Patient.findOneAndUpdate({ _id: id }, {
    ...req.body
  })
  console.log(patientRecord);


  if (!patientRecord) {
    return res.status(400).json({ error: "Invalid patient ID" })
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