import 'reflect-metadata'

import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'

const app = express()

// Enables Helmet, a set of tools to
app.use(cors({ origin: true }))

// increase security.
app.use(helmet())

app.use(bodyParser.json())

const routes: express.Router = express.Router()
// require('./v1/author')(routes)
// require('./v1/book')(routes)
// require('./v1/category')(routes)
// require('./v1/country')(routes)

app.use('/v1/api', routes)

// module.exports = app
export const api = app
