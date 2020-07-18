import { Request, Response } from 'express'

module.exports = async (req: Request, res: Response) => {
	try {
		await res.status(200).send({ info: 'bookCreate' })
	} catch (error) {
		res.send(error)
	}
}
