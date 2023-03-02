require('dotenv').config()
const express = require('express')
const moongose = require('mongoose')
const patientRoutes = require('./routes/patient_record')

//mongoose.set('strictQuery', false);

// This creates an express app using the module declared above.
const app = express()

// trying to set table using api.get

// middleware
app.use(express.json()) // Allows access to req.body within the varias requests.
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/patient_record', patientRoutes)
// app.get("/test", (req,res)=>
// res.send("It works!"))

// connect to the database
moongose.connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for the requests
    app.listen(process.env.PORT, () => {
      console.log('successfully connected to database npm& listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

