var path = require('path')
const express = require('express')
var formData = require('form-data')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const cors = require ('cors')

var bodyParser = require('body-parser')
const { response } = require('express')

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

//app.get('/NLP', mockAPIResponse.AnalyseData);

app.get('/nlp', async (req, res) => {
    const form = new formData();
    form.append("key", "ca77b127562a30ed96bbd40241258956");
    form.append("url", "https://www.verywellmind.com/what-is-positive-thinking-2794772");
    form.append("lang", "en");

    const requestOptions = {
        method: 'POST',
        body: form,
        redirect: 'follow'
    };

    const fetch_response = await fetch ("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
    const json = await fetch_response.json();
    console.log(json);
    res.json(json);
});
