import * as express from 'express'
import * as categoryList from './categoryList'
import * as categoryCreate from './categoryCreate'
import * as categoryFind from './categoryFind'
import * as categoryUpdate from './categoryUpdate'
import * as categoryDestroy from './categoryDestroy'

const router = express.Router()

router.post('/category', <express.Application>categoryCreate)

router.put('/category/:id', <express.Application>categoryUpdate)

router.delete('/category/:id', <express.Application>categoryDestroy)

router.get('/category', <express.Application>categoryList)

router.get('/category/:id', <express.Application>categoryFind)

module.exports = router
