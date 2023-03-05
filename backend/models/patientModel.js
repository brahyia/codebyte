const mongoose = require('mongoose')

// create a new schema
const Schema = mongoose.Schema 

/*  
    the schema describes what the data should look like, e.g. if it should be a 
    number or string, etc.the schema defines the structure of a piece of data 
    or document 
*/
const patientRecord = new Schema({

  patientId: {
    type: String
  },
  age: {
    type: Number
  },
  sex: {
    type: String
  },
  zip: {
    type: Number
  },
  latestBmi: {
    type: Number
  },
  latestWeight: {
    type: Number
  },
  pngFileName: {
    type: String
  },
  examId: {
    type: String
  },
  icuAdmit: {
    type: String
  },
  numIcuAdmissions: {
    type: Number
  },
  mortality: {
    type: String
  }

}, { timestamps: true }) // creates a time stamp for when the request was made.


// models apply the schemas that have been created
// we can then use models to interact with a [TBD]
module.exports = mongoose.model('patientRecords', patientRecord)

