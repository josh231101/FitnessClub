const request = require('supertest');

let app
describe("Sample test",() => {
    beforeAll(async ()=>{
        app = await require('../src/server');

    })
    it("return a 200 status when getting /status", async ()=>{
        const res = await request(app)
        .get('/');
        expect(res.status).toBe(200)
    })
})