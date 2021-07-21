var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require ('cors')

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/nlpLink/:userLink', mockAPIResponse.analyseDataLink);

app.get('/nlpText/:userText', mockAPIResponse.analyseDataText);