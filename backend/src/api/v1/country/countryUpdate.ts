import { Response, Request } from 'express'
import { CountryService } from '../../../services/country'

module.exports = async (req: Request, res: Response) => {
	try {
		const payload = await new CountryService().update(req.params.id, req.body)
		res.status(200).send(payload)
	} catch (error) {
		res.send(error)
	}
}
