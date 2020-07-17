import 'reflect-metadata'

import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'

const expressApp = express()

// Enables Helmet, a set of tools to
expressApp.use(cors({ origin: true }))

// increase security.
expressApp.use(helmet())

expressApp.use(bodyParser.json())

const routes = express.Router()
routes.route('./v1/author')
routes.route('./v1/book')
routes.route('./v1/category')
routes.route('./v1/country')

expressApp.use('/v1/api', routes)

expressApp.get('/', (req, res) => {
	res.send({ AppName: 'Bookiper' })
})

// module.exports = app
export const app = expressApp
