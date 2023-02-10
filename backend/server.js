require('dotenv').config()
const express = require('express')
const moongose = require('mongoose')
const patientRoutes = require('./routes/patient_record')


// This creates an express app using the module declared above.
const app = express()


// middleware
app.use(express.json()) // Allows access to req.body within the varias requests.
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/patient_record', patientRoutes)

// connect to the database
moongose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for the requests
    app.listen(process.env.PORT, () => {
      console.log('successfully connected to database & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

