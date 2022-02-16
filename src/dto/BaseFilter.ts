// import { ApiProperty } from '@nestjs/swagger'

class BaseFilter {
//   @ApiProperty({ required: false })
  limit: number = 20

//   @ApiProperty({ required: false })
  page: number = 0

  getPage() {
    return this.limit * this.page
  }
}

export default BaseFilter
