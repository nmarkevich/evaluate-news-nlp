import 'regenerator-runtime/runtime';
import { getDataForLink, getDataForText } from "../src/client/js/formHandler.js";

describe ("Testing the getting data for link functionality", () => {
    test("Testing the getDataForLink function", done => {
        try {
            const testLink = "https://www.verywellmind.com/what-is-anger-5120208";
            expect(getDataForLink(testLink)).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    }),
    test("Testing the getDataForText function", done => {
        try {
            const testText = "Life is good!";
            expect(getDataForText(testText)).toBeDefined();
            done();
        } catch (error) {
            done(error);
        }
    })
});