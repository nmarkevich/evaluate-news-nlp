function checkLink(inputText) {
    console.log("::: Running checkLink :::", inputText);
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const validationText = document.getElementById("LinkValidationMsg");
    const validationField = document.getElementById("linkFromUser");

    if (inputText == "") {
        validationText.innerHTML = "The link is required";
        validationField.focus();
        validationField.style.borderColor = "red";
        validationText.style.visibility = "visible";
        return false;
    } else if (inputText.match(regex)) {
        validationText.style.visibility = "hidden";
        validationField.style.borderColor = "black";
        return true;
    } else {
        validationText.innerHTML = "The link is incorrect. Put the correct link";
        validationField.focus();
        validationField.style.borderColor = "red";
        validationText.style.visibility = "visible";
        return false;
    }
}

function checkText(inputText) {
    console.log("::: Running checkText :::", inputText);
    const validationText = document.getElementById("textValidationMsg");
    const validationField = document.getElementById("textFromUser");

    if (inputText == "") {
        validationText.innerHTML = "The text is required";
        validationField.focus();
        validationField.style.borderColor = "red";
        validationText.style.visibility = "visible";
        return false;
    } else {
        validationText.style.visibility = "hidden";
        validationField.style.borderColor = "black";
        return true;
    }
}

export { checkText }
export { checkLink }
