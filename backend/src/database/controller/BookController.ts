import { getRepository } from 'typeorm'

import { Book } from '../entity/Book'

export class BookController {
	private bookRepository = getRepository(Book)

	async create(data, options?) {
		try {
			const record = await this.bookRepository.save(data)

			return this.findById(record.id, options)
		} catch (error) {
			throw error
		}
	}

	async findById(id: any, options?) {
		try {
			return await this.bookRepository.findOne(id)
		} catch (error) {
			throw error
		}
	}

	async destroy(id: any, option?) {
		try {
			const record = await this.bookRepository.findOne(id)
			return await this.bookRepository.delete(record)
		} catch (error) {
			throw error
		}
	}

	async update(id, data, option?) {
		let record = await this.bookRepository.findOne(id)
		return await this.bookRepository.update(record.id, data)
	}

	async findAndCountAll(
		{ filter, limit, offset, orderBy } = {
			filter: null,
			limit: 0,
			offset: 0,
			orderBy: null,
		}
	) {
		return await this.bookRepository.find()
	}
}
