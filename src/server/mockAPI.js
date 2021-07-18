var formData = require('form-data')
const fetch = require('node-fetch')

/* Global Variables */
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = "ca77b127562a30ed96bbd40241258956";

module.exports = {
    AnalyseDataLink : async function (req, res) {
        const form = new formData();
        form.append("key", "ca77b127562a30ed96bbd40241258956");
        form.append("url", req.params.userLink);
        form.append("lang", "en");

        const requestOptions = {
            method: 'POST',
            body: form,
            redirect: 'follow'
        };

        const fetch_response = await fetch ("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const json = await fetch_response.json();
        console.log(json);
        console.log(req.params.userLink);
        res.json(json);
    },
    AnalyseDataText : async function (req, res) {
        const form = new formData();
        form.append("key", "ca77b127562a30ed96bbd40241258956");
        form.append("txt", req.params.userText);
        form.append("lang", "en");

        const requestOptions = {
            method: 'POST',
            body: form,
            redirect: 'follow'
        };

        const fetch_response = await fetch ("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
        const json = await fetch_response.json();
        console.log(json);
        console.log(req.params.userText);
        res.json(json);
    }
}
