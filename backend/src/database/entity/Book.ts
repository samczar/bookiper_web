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

	@Column({ nullable: true })
	bookPublishedDate: string

	@Column({ nullable: true })
	bookShortDescription: string

	@Column({ nullable: true })
	bookCoverImage: string

	@Column({ nullable: true })
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
