import { CountryController } from '../database/controller/CountryController'

export class CountryService {
	private countryRepository = new CountryController()
	/**
	 * Create Country
	 */

	async create(data) {
		try {
			const record = await this.countryRepository.create(data)
			return record
		} catch (error) {
			throw error
		}
	}

	async update(id: any, data: any) {
		try {
			return await new CountryController().update(id, data)
		} catch (error) {
			throw error
		}
	}

	async destroyAll(ids) {
		try {
			return await new CountryController().destroy(ids)
		} catch (error) {
			throw error
		}
	}

	async findById(id) {
		try {
			const record = await this.countryRepository.findById(id)
			return record
		} catch (error) {
			throw error
		}
	}

	async findAndCountAll(args) {
		return await this.countryRepository.findAndCountAll(args)
	}
}
