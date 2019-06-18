// import { Router } from 'express'

const Router = require('express').Router



const router = Router()

const users = [
    { username: 'John' },
    { username: 'James' },
    { username: 'Jim' },
]

router.param('id', (req, res, next, id) => {
    console.log(id)
    next()
})

router.all('/', (req, res, next) => {
    console.log(req.baseUrl)
    next()
})

router.route('/')
.get((req, res) => {
    res.send(users)
})
.post((req, res) => {
    res.send(req.body)
})

router.route('/:id')
.get((req, res) => {
    res.send(users[req.params.id])
})
.put((req, res) => {
    res.send(users[req.params.id])
})
.delete((req, res) => {
    res.send(users[req.params.id])
})


// export default router

module.exports = router