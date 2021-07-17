import { checkLink } from './inputChecker'
import { checkText } from './inputChecker'

function handleSubmitLink(event) {
    event.preventDefault()

    // check that a link was put into the form field
    let formLink = document.getElementById('linkFromUser').value
    checkLink(formLink)

    console.log("::: Link Form Submitted :::")
    getData()
    .then(function(data) {
        document.getElementById('results').innerHTML = `Agreement: ${data.agreement} <br> Subjectivity: ${data.subjectivity} <br> Irony: ${data.irony}`;
    });
}

function handleSubmitText(event) {
    event.preventDefault()

    // check that a link was put into the form field
    let formText = document.getElementById('textFromUser').value
    checkText(formText)

    console.log("::: Text Form Submitted :::")

}

//Get request to receive API call result from the server
const getData = async () => {
    const res = await fetch ('http://localhost:8081/nlp');

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
