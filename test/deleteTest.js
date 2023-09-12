const chai = require('chai');
const server = require('../index'); // Import your Express app
const request = require("supertest");
const chaiHttp = require('chai-http');
const expect = chai.expect;
// let should = chai.should();
chai.use(chaiHttp)

describe('API Endpoint Tests', () => {
    it('should return the right values', async () => {
        const response = await chai.request(server).get("/api/Samuel Ikoli");
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        // expect(response).to.be.an('object');
    }).timeout(10000);
    // Add more test cases as needed

});
