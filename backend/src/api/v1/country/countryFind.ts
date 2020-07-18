import { Response, Request } from 'express'

module.exports = async (req: Request, res: Response) => {
	try {
		res.status(200).send({ countryId: req.params.id + 'value' })
	} catch (error) {
		res.send(error)
	}
}
