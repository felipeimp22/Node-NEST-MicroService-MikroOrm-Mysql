import {
    Collection,
    Entity,
    OneToMany,
    PrimaryKey,
    Property,
    Unique
  } from '@mikro-orm/core'
//   import { ApiProperty } from '@nestjs/swagger'
  import { IsOptional, IsString, IsNumber } from 'class-validator'
  import { UserProfile } from './UserProfile'
  
  @Entity()
  export class User {
    // @ApiProperty({ required: false, readOnly: true })
    @IsNumber()
    @IsOptional()
    @PrimaryKey()
    id!: number
  
    // @ApiProperty()
    @IsString()
    @Property()
    @Unique()
    network!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    name!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    @Unique()
    shiftUser!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    state!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    unitName!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    unitDatasul!: string
  
    // @ApiProperty()
    @IsString()
    @Property()
    unitShift!: string
  
    @Property()
    deleted?: boolean
  
    // @ApiProperty({ type: () => UserProfile, isArray: true })
    @OneToMany(() => UserProfile, up => up.user)
    profile = new Collection<UserProfile>(this)
  }
  