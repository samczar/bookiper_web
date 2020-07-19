import { Request, Response } from 'express'
import { AuthorService } from '../../../services/author'

module.exports = async (req: Request, res: Response) => {
	try {
		const record = await new AuthorService().findAndCountAll(req.body)
		return res.status(200).send(record)
	} catch (error) {
		res.send(error)
	}
}
