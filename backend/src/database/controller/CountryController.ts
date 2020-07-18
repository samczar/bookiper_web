import { getRepository } from 'typeorm'

import { Country } from '../entity/Country'

export class CountryController {
	private countryRepository = getRepository(Country)

	async create(data, options?) {
		const record = await this.countryRepository.save(data)

		return this.findById(record.id, options)
	}

	async findById(id: any, options?) {
		const record = await this.countryRepository.findOne(id)

		return record
	}

	async destroy(id: any, option?) {
		try {
			const record = await this.countryRepository.findOne(id)
			return await this.countryRepository.delete(record)
		} catch (error) {
			throw error
		}
	}

	async update(id, data, option?) {
		let record = await this.countryRepository.findOne(id)
		return await this.countryRepository.update(record.id, data)
	}

	async findAndCountAll(
		{ filter, limit, offset, orderBy } = {
			filter: null,
			limit: 0,
			offset: 0,
			orderBy: null,
		}
	) {
		return await this.countryRepository.find()
	}
}
