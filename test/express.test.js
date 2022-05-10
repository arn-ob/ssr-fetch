const express = require('express');
const request = require("supertest");

// Create Express Application
function ExpressInit() {

    let exp = express();
    let router = express.Router();

    router.route('/').get(function (req, res) {
        return res.json({ status: true });
    });

    router.route('/').post(function (req, res) {
        return res.json({ status: true });
    });

    // router
    exp.use(router);

    return exp;
}


describe('GET - Testing With Express', function () {
    let exp;

    // Called once before any of the tests in this block begin.
    beforeAll(function (done) {
        exp = ExpressInit();
        exp.listen(function (err) {
            if (err) { 
                console.error("Express init Error");
                return done(err); 
            }
            
            console.log("Express init Done");
            done();
        });
    });
    
    it('Return request from GET', function (done) {
        request(exp)
            .get('/')
            .expect(200, function (err, res) {
                if (err) { 
                    console.error("Request Error");
                    return done(err); 
                }

                console.log("GET - Request Body", res.body);
                
                expect(res.statusCode).toBe(200);
                done();
            });
    });

    it('Return request from POST', function (done) {
        request(exp)
            .post('/')
            .expect(200, function (err, res) {
                if (err) { return done(err); }

                console.log("POST - Request Body", res.body);
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});