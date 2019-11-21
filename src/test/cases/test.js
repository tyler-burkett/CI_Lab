const {expect} = require('../chai')
const request = require('supertest')

const app = require('../../main/app')

describe('GET - /', async () => {

    it('returns 200', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/')

        // check the HTTP status code
        expect(response.statusCode).to.equal(200)
        // check the raw text returned
        expect(response.text).to.equal('Hello World!')
    })
    
    it('returns 200 on /2 path', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/2')

        // check the HTTP status code
        expect(response.statusCode).to.equal(200)
        // check the raw text returned
        expect(response.text).to.equal('Hello World 2!')
    })
    
})