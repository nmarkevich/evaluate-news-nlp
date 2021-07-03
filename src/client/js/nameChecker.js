function checkLink(inputText) {
    console.log("::: Running checkLink :::", inputText);
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    if (inputText.match(regex)) {
        alert("Successful match");
    } else {
        alert("No match");
    }
}

export { checkLink }
