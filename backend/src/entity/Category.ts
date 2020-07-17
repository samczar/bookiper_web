import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	JoinTable,
	BeforeInsert,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Book } from './Book'

@Entity()
export class Catergory extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ nullable: false })
	categoryName: string

	@Column()
	bookISBN: string

	@Column()
	bookPublishedDate: string

	@Column()
	bookShortDescription: string

	@Column()
	categoryCoverImage: string

	@Column()
	bookFile: string

	@ManyToMany((type) => Book)
	@JoinTable()
	categoryBook: Book[]

	//Catergory Many to Many

	@BeforeInsert()
	addId() {
		this.id = uuidv4()
	}
}
