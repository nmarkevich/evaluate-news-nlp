import { checkLink } from './inputChecker'
import { checkText } from './inputChecker'

function handleSubmitLink(event) {
    event.preventDefault()

    // check that a link was put into the form field
    let formLink = document.getElementById('linkFromUser').value;
    console.log("::: Link Form Submitted :::")
    const validationResult = checkLink(formLink);
    if (validationResult) {
        getDataForLink(formLink)
        .then(function(data) {
            document.getElementById('results').innerHTML = `Link: ${formLink} <br> Agreement: ${data.agreement} <br> Subjectivity: ${data.subjectivity} <br> Irony: ${data.irony}`;
        });
    } else {
        document.getElementById('results').innerHTML = "";
    }
}

function handleSubmitText(event) {
    event.preventDefault()

    // check that a text was put into the form field
    let formText = document.getElementById('textFromUser').value;
    console.log("::: Text Form Submitted :::")
    const validationResult = checkText(formText);
    if(validationResult) {
        getDataForText(formText)
        .then(function(data) {
            document.getElementById('results').innerHTML = `Agreement: ${data.agreement} <br> Subjectivity: ${data.subjectivity} <br> Irony: ${data.irony} <br> Text: ${formText}`;
        });
    } else {
        document.getElementById('results').innerHTML = "";
    }
}

//Get request to receive API call result from the server - Link
const getDataForLink = async (fl) => {
    const urlEncoded = encodeURIComponent(fl);
    const res = await fetch (`http://localhost:8081/nlpLink/${urlEncoded}`);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", console.error);
    }
}

//Get request to receive API call result from the server - Text
const getDataForText = async (tx) => {
    const textEncoded = encodeURIComponent(tx);
    const res = await fetch (`http://localhost:8081/nlpText/${textEncoded}`);

    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", console.error);
    }
}

export { handleSubmitLink }
export { handleSubmitText }
export { getDataForLink }
export { getDataForText }
