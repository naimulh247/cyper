const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')
const cors = require('cors')

app.use(cors())
mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () =>{
    console.log("connected to mongodb")
})
mongoose.connection.on('error', (err) =>{
    console.log("error connecting", err)
})

// import the mongodb models
require('./models/user')
require('./models/post')

// order of the app.use matters!
app.use(express.json())
app.use(require('./routes/posts'))
app.use(require('./routes/authentication'))

// Start the server
app.listen(PORT, () =>{
    console.log("Server is running", PORT)
})