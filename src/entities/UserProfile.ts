import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core'
// import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNumber } from 'class-validator'
import { User } from './User'

@Entity()
export class UserProfile {
//   @ApiProperty({ required: false, readOnly: true })
  @IsNumber()
  @IsOptional()
  @PrimaryKey()
  id!: number

//   @ApiProperty({ type: () => User })
  @ManyToOne(() => User)
  user!: User

//   @ApiProperty()
  @IsNumber()
  @Property()
  profile!: number
}
