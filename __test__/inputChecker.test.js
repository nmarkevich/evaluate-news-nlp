import { checkLink, checkText } from "../src/client/js/inputChecker.js";

describe ("Testing the checkLink function", () => {
    test("Testing empty input from a user", () => {
        document.body.innerHTML = 
        '<p id="LinkValidationMsg">' + '</p>' + '<input id="linkFromUser">';
        const testLink = "";
        const ValidationMsg = document.getElementById("LinkValidationMsg");
        expect(checkLink(testLink)).toBeFalsy();
    })
});
