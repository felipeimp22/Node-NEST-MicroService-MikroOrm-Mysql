// import { ApiProperty } from '@nestjs/swagger'
import { User } from '../entities/User'

export class ListUserResponse {
//   @ApiProperty({ type: User, isArray: true })
  data!: User[]
}
