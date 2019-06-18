// import app from './server'
// import request from 'supertest'
// import { expect } from 'chai'

const app = require('./server')
const request = require('supertest')
const expect = require('chai').expect


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on ' + port)
})

describe('users', () => {
    beforeEach(() => {
        console.log('before every test')
    })
    
    it('should GET all users', (done) => {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            expect(res.body).to.be.an('array')
            done()
        })
    })


    it('should GET all users', (done) => {
        request(app)
        .get('/api/users/0')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            expect(res.body).to.be.an('object')
            done()
        })
    })
})