import * as express from 'express'
import * as countryList from './countryList'
import * as countryCreate from './countryCreate'
import * as countryDestroy from './countryDestroy'
import * as countryUpdate from './countryUpdate'
import * as countryFind from './countryFind'

const router = express.Router()

router.post('/country', <express.Application>countryCreate)

router.put('/country/:id', <express.Application>countryUpdate)

router.delete('/country/:id', <express.Application>countryDestroy)

router.get('/country', <express.Application>countryList)

router.get('/country/:id', <express.Application>countryFind)

module.exports = router
