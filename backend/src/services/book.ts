import { BookController } from '../database/controller/BookController'

export class BookService {
	private bookRepository = new BookController()
	/**
	 * Create book
	 */

	async create(data: any) {
		try {
			const record = await this.bookRepository.create(data)
			return record
		} catch (error) {
			throw error
		}
	}

	async update(id: any, data: any) {
		try {
			return await new BookController().update(id, data)
		} catch (error) {
			throw error
		}
	}

	async destroyAll(ids: any) {
		try {
			return await new BookController().destroy(ids)
		} catch (error) {
			throw error
		}
	}

	async findById(id: any) {
		try {
			const record = await this.bookRepository.findById(id)
			return record
		} catch (error) {
			throw error
		}
	}

	async findAndCountAll(args) {
		return await this.bookRepository.findAndCountAll(args)
	}
}
