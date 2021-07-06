function checkLink(inputText) {
    console.log("::: Running checkLink :::", inputText);
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    const validationText = document.getElementById("validationMsg");
    const validationField = document.getElementById("linkFromUser");

    if (inputText == "") {
        validationText.innerHTML = "The link is required";
        validationField.focus();
        validationField.style.borderColor = "red";
        validationText.style.visibility = "visible";
    } else if (inputText.match(regex)) {
        validationText.style.visibility = "hidden";
        alert("Successful match");
    } else {
        validationText.innerHTML = "The link is incorrect. Put the correct link";
        validationField.focus();
        validationField.style.borderColor = "red";
        validationText.style.visibility = "visible";
    }
}

export { checkLink }
