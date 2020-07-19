import { getRepository } from 'typeorm'

import { Author } from '../entity/Author'

export class AuthorController {
	private authorController = getRepository(Author)

	async create(data: any, options?) {
		try {
			const record = await this.authorController.save(data)

			return this.findById(record.id, options)
		} catch (error) {
			throw error
		}
	}
	async findById(id: any, options?: any) {
		try {
			return await this.authorController.findOne(id)
		} catch (error) {
			throw error
		}
	}

	async findAndCountAll(
		{ filter, limit, offset, orderBy } = {
			filter: null,
			limit: 0,
			offset: 0,
			orderBy: null,
		}
	) {
		try {
			return await this.authorController.find()
		} catch (error) {
			throw error
		}
	}

	async update(id: any, data: any) {
		try {
			const record = await this.authorController.findOne(id)
			return await this.authorController.update(record, data)
		} catch (error) {
			throw error
		}
	}

	async destroy(id: any) {
		try {
			const record = await this.authorController.findOne(id)

			return await this.authorController.delete(record)
		} catch (error) {
			throw error
		}
	}
}
