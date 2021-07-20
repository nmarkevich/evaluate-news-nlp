import 'regenerator-runtime/runtime';
import { analyseDataText, analyseDataLink } from '../src/server/mockAPI.js';

describe ("Testing the API calls", () => {
    test ("Testing API call using link", done => {
        try {
            expect(analyseDataLink).toBeDefined();
            done();
        } catch (error){
            done(error);
        }
    }), 
    test ("Testing API call using text", done => {
        try {
            expect(analyseDataText).toBeDefined();
            done();
        } catch (error){
            done(error);
        }
    })
})
