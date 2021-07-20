var path = require('path')
const express = require('express')
var formData = require('form-data')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const cors = require ('cors')

var bodyParser = require('body-parser')
const { response } = require('express')
const { link } = require('fs')

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/nlpLink/:userLink', mockAPIResponse.analyseDataLink);

app.get('/nlpText/:userText', mockAPIResponse.analyseDataText);