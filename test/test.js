const chai = require('chai');
const server = require('../index'); // Import your Express app
const request = require("supertest");
const chaiHttp = require('chai-http');
const expect = chai.expect;
// let should = chai.should();
chai.use(chaiHttp)

describe('API Endpoint Tests', () => {

    const name = `Mark Essien ${Math.floor(Math.random() * 1000)}`
    const value = 'I am best tech entrepreneur';

    const newName = 'Albert Einstein';
    const newValue = 'In my time we did not have HNG';

    it(`1). POST requests to /api should create a new user ${name} with value ${value}`, async () => {
        const response = await chai.request(server).post("/api").type('form').send({
            '_method': 'post',
            name,
            value
        });
        console.log(response.body)
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("name");
        expect(response.body).to.have.property("_id");
    }).timeout(15000);

    it(`2). should return user detail when a GET request is made to /api/${name}`, async () => {
        const response = await chai.request(server).get(`/api/${name}`);
        console.log('\n', response.body)
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("_id"); // Assuming the response includes an 'id'
        expect(response.body).to.have.property("name");        // expect(response).to.be.an('object');
    }).timeout(15000);

    it(`3). should update user details for ${name} to ${newName}`, async () => {
        const response = await chai.request(server).put(`/api/${name}`).type('form').send({
            '_method': 'put',
            name: newName,
            value: newValue
        });;
        console.log('\n', response.body)
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        // expect(response).to.be.an('object');
    }).timeout(15000);

    it(`4). should delete user when a POST request is made to /api/${newName}`, async () => {
        const response = await chai.request(server).post(`/api/${newName}`);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property("name");
        expect(response.body).to.have.property("_id");
    }).timeout(15000);



});
