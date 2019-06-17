import { Router } from 'express'

const router = Router()

const users = [
    { username: 'John' },
    { username: 'James' },
    { username: 'Jim' },
]

router.get('/', (req, res) => {
    res.send(users)
})

router.get('/error', (req, res, next) => {
    const err = new Error('oh no')
    console.log(err)
    next(err)
})

export default router