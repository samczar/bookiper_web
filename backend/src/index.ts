import 'reflect-metadata'
import { createConnection } from 'typeorm'

import { app } from './api/index'

createConnection()
	.then(async (connection) => {
		// register express routes from defined application routes
		// Routes.forEach((route) => {
		// 	;(app as any)[route.method](
		// 		route.route,
		// 		(req: Request, res: Response, next: Function) => {
		// 			const result = new (route.controller as any)()[route.action](
		// 				req,
		// 				res,
		// 				next
		// 			)
		// 			if (result instanceof Promise) {
		// 				result.then((result) =>
		// 					result !== null && result !== undefined
		// 						? res.send(result)
		// 						: undefined
		// 				)
		// 			} else if (result !== null && result !== undefined) {
		// 				res.json(result)
		// 			}
		// 		}
		// 	)
		// })

		// setup express app here
		// ...

		// start express server
		app.listen(5000)

		console.log('Express server has started on port 5000.')
	})
	.catch((error) => console.log(error))
