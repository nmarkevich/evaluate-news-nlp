var formData = require('form-data')
const fetch = require('node-fetch')

/* Global Variables */
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const apiKey = "ca77b127562a30ed96bbd40241258956";
let textFromUser;


module.exports = {
    AnalyseData : async function (req, res) {
        
        const form = new formData();
        form.append("key", apiKey);
        form.append("url", "https://www.verywellmind.com/what-is-positive-thinking-2794772");
        form.append("lang", "en");

        const requestOptions = {
            method: 'POST',
            body: form,
            redirect: 'follow'
        };

        const response = await fetch (baseURL, requestOptions)
        .then(response => ({
            status: response.status,
            body: response.json()
        }))
        .then(({ status, body }) => {
            console.log(status, body);
        })
        .catch(error => console.log('error happend here', error));
    }
}
