import 'dotenv/config'
import express from 'express'
import { createBullBoard } from 'bull-board'
import BibleVerseController from './controller/BibleVerseController'
import UserController from './controller/UserController'

const { BullAdapter } = require('bull-board/bullAdapter')

const Queue = require('bull');
const mailQueue = new Queue(process.env.QUEUE_EMAIL_SENDER);

const app = express()

const { router, setQueues, replaceQueues, addQueue, removeQueue } = createBullBoard([
    new BullAdapter(mailQueue)
  ])

app.use(express.json())
app.get('/verse', BibleVerseController.verse)
app.post('/users', UserController.store)
app.use('/admin/queues', router)

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on port ${process.env.PORT}`)
})