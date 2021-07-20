import 'regenerator-runtime/runtime';
import analyseDataLink from '../src/server/mockAPI.js';

describe ("Testing the API calls", () => {
    test ("Testing API call using link", done => {
        try {
            expect(analyseDataLink).toBeDefined();
            done();
        } catch (error){
            done(error);
        }
    })
})
