const express = require('express');
const request = require("supertest");

// Create Express Application
function createApp() {
    app = express();

    let router = express.Router();
    router.route('/').get(function (req, res) {
        return res.json({ goodCall: true });
    });

    app.use(router);

    return app;
}


describe('Testing With Express', function () {
    let app;

    // Called once before any of the tests in this block begin.
    beforeAll(function (done) {
        app = createApp();
        app.listen(function (err) {
            if (err) { return done(err); }
            
            console.log("App Creating Done")
            done();
        });
    });
    
    it('should send back a JSON object with goodCall set to true', function (done) {
        request(app)
            .get('/')
            .expect(200, function (err, res) {
                if (err) { return done(err); }
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});