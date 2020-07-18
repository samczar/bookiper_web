import { Request, Response } from 'express'

module.exports = (req: Request, res: Response) => {
	try {
		res.status(200).send({ info: 'CategotyCreate' })
	} catch (error) {
		res.send(error)
	}
}
