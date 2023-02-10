const mongoose = require('mongoose')

// create a new schema
const Schema = mongoose.Schema 

const patientRecord = new Schema({
  // the schema describes what the data should look like, e.g. if it should be a number or string, etc.
  // the schema defines the structure of a piece of data or document
  name: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }

}, { timestamps: true }) // creates a time stamp for when the request was made.


// models apply the schemas that have been created
// we can then use models to interact with a [TBD]
module.exports = mongoose.model('patient', patientRecord)

