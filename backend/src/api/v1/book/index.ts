import * as express from 'express'

import * as bookCreate from './bookCreate'
import * as bookUpdate from './bookUpdate'
import * as bookDestroy from './bookDestroy'
import * as bookList from './bookList'
import * as bookFind from './bookFind'

const router = express.Router()

router.post('/book', <express.Application>bookCreate)

router.put('/book/:id', <express.Application>bookUpdate)

router.delete('/book/:id', <express.Application>bookDestroy)

router.get('/book', <express.Application>bookList)

router.get('/book/:id', <express.Application>bookFind)

module.exports = router
