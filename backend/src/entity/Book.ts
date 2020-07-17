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
import { Catergory } from './Category'
import { Author } from './Author'

@Entity()
export class Book extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ nullable: false })
	bookName: string

	@Column()
	bookISBN: string

	@Column()
	bookPublishedDate: string

	@Column()
	bookShortDescription: string

	@Column()
	bookCoverImage: string

	@Column()
	bookFile: string

	@ManyToMany((type) => Catergory)
	@JoinTable()
	bookCatergory: Catergory[]

	@ManyToMany((type) => Author)
	@JoinTable()
	bookAuthour: Author[]

	//Catergory Many to Many

	@BeforeInsert()
	addId() {
		this.id = uuidv4()
	}
}
