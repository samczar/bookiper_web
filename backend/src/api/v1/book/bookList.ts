import { Request, Response } from 'express'
import { BookService } from '../../../services/book'

module.exports = async (req: Request, res: Response) => {
	try {
		return res
			.status(200)
			.send(await new BookService().findAndCountAll(req.body))
	} catch (error) {
		res.send(error)
	}
}
