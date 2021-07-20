import { checkLink, checkText } from "../src/client/js/inputChecker.js";

describe ("Testing the checkLink function", () => {
    test("Testing empty input for checkLink function", () => {
        document.body.innerHTML = 
        '<p id="LinkValidationMsg">' + '</p>' + '<input id="linkFromUser">';
        const testLink = "";
        const ValidationMsg = document.getElementById("LinkValidationMsg");
        expect(checkLink(testLink)).toBeFalsy();
    }),
    test("Testing incorrect input for checkLink function", () => {
        document.body.innerHTML = 
        '<p id="LinkValidationMsg">' + '</p>' + '<input id="linkFromUser">';
        const testLink = "google.com";
        const ValidationMsg = document.getElementById("LinkValidationMsg");
        expect(checkLink(testLink)).toBeFalsy();
    })
});

describe ("Testing the checkText function", () => {
    test("Testing empty input for checkText function", () => {
        document.body.innerHTML = 
        '<p id="textValidationMsg">' + '</p>' + '<input id="textFromUser">';
        const testText = "";
        const ValidationMsg = document.getElementById("textValidationMsg");
        expect(checkText(testText)).toBeFalsy();
    })
});
