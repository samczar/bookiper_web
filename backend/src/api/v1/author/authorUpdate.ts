import { Request, Response } from 'express'
import { AuthorService } from '../../../services/author'
module.exports = async (req: Request, res: Response) => {
	try {
		return res
			.status(200)
			.send(await new AuthorService().update(req.params.id, req.body))
	} catch (error) {
		res.send(error)
	}
}
