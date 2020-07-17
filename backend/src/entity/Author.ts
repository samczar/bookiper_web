import {
	Entity,
	BaseEntity,
	Column,
	PrimaryGeneratedColumn,
	BeforeInsert,
	OneToOne,
	ManyToMany,
	JoinTable,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Country } from './Country'
import { Book } from './Book'

@Entity()
export class Author extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ nullable: false })
	AuthorFirstName: string

	@Column({ nullable: false })
	authorLastName: string

	@Column({ nullable: true })
	authorEmail: string

	@Column({ nullable: true })
	authorPhoto: string

	//country
	@OneToOne((type) => Country, (country) => country)
	authorCountry: Country

	@ManyToMany((type) => Book)
	@JoinTable()
	categoryBook: Book[]

	@BeforeInsert()
	addId() {
		this.id = uuidv4()
	}
}
