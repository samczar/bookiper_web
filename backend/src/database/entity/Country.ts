import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	BeforeInsert,
	Column,
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Country extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ nullable: false })
	countryName: 'string'

	@Column({ nullable: true })
	countryFlag: 'string'

	@BeforeInsert()
	addId() {
		this.id = uuidv4()
	}
}
