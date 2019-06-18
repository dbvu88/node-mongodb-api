import app from './server'
import request from 'supertest'
import { expect } from 'chai'

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on ' + port)
})

describe('users', () => {
    it('should GET all users', (done) => {
        request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .done((err, res) => {
            expect(res.body).to.be.an('array')
            done()
        })
    })
})