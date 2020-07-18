import 'reflect-metadata'

import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'

import * as country from './v1/country'
import * as category from './v1/category'
import * as book from './v1/book'
import * as author from './v1/author'

const expressApp = express()

// Enables Helmet, a set of tools to
expressApp.use(cors({ origin: true }))

// increase security.
expressApp.use(helmet())

expressApp.use(bodyParser.json())

expressApp.use('/v1/api', <any>country)
expressApp.use('/v1/api', <any>category)
expressApp.use('/v1/api', <any>book)
expressApp.use('/v1/api', <any>author)

expressApp.get('/', (req, res) => {
	res.send({ AppName: 'Bookiper' })
})

// module.exports = app
export const app = expressApp
