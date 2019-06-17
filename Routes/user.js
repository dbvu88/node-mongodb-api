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

export default router