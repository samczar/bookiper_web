import { Response, Request } from 'express'
import { CountryService } from '../../../services/country'

module.exports = async (req: Request, res: Response) => {
	try {
		const payload = await new CountryService().findAndCountAll(req.body)
		res.status(200).send(payload)
	} catch (error) {
		res.send(error)
	}
}
