import { checkLink } from './inputChecker'

function handleSubmitLink(event) {
    event.preventDefault()

    // check that a link was put into the form field
    let formText = document.getElementById('linkFromUser').value
    checkLink(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
}

function handleSubmitText(event) {
    event.preventDefault()

    // check that a link was put into the form field
    let formText = document.getElementById('linkFromUser').value
    checkLink(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8080/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
}

export { handleSubmitLink }
export { handleSubmitText }
