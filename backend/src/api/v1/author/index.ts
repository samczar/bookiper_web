import * as express from 'express'
import * as authorCreate from './authorCreate'
import * as authorDestroy from './authorDestroy'
import * as authorFind from './authorFind'
import * as authorList from './authorList'
import * as authorUpdate from './authorUpdate'

const router = express.Router()

router
	.post('/author', <any>authorCreate)

	.put('/author/:id', <any>authorUpdate)

	.delete('/author/:id', <any>authorDestroy)

	.get('/author', <any>authorList)

	.get('/author/:id', <any>authorFind)

module.exports = router
