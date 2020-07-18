import { Response, Request } from 'express'

module.exports = async (req: Request, res: Response) => {
	try {
		res.status(200).send('hello country')
	} catch (error) {
		res.send(error)
	}
}
