import 'reflect-metadata'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Request, Response } from 'express'
import { GraphQLServer } from 'graphql-yoga'

import { Routes } from './routes'

createConnection()
	.then(async (connection) => {
		// create express app
		const app = express()
		app.use(bodyParser.json())

		// register express routes from defined application routes
		Routes.forEach((route) => {
			;(app as any)[route.method](
				route.route,
				(req: Request, res: Response, next: Function) => {
					const result = new (route.controller as any)()[route.action](
						req,
						res,
						next
					)
					if (result instanceof Promise) {
						result.then((result) =>
							result !== null && result !== undefined
								? res.send(result)
								: undefined
						)
					} else if (result !== null && result !== undefined) {
						res.json(result)
					}
				}
			)
		})

		//Graphql Connection Here
		const typeDefs = `
		type Query{
			hello(name: String): String!
		}
		`
		const resolvers = {
			Query: {
				hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
			},
		}

		const server = new GraphQLServer({ typeDefs, resolvers })
		server.start(() => console.log('Server is runnings'))
		// setup express app here
		// ...

		// start express server
		app.listen(3000)

		console.log(
			'Express server has started on port 3000. Open http://localhost:3000/users to see results'
		)
	})
	.catch((error) => console.log(error))
