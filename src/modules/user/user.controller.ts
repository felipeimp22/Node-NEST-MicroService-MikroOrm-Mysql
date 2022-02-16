import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    Request,
    UseGuards
  } from '@nestjs/common'
//   import {
//     ApiBadRequestResponse,
//     ApiBody,
//     ApiCreatedResponse,
//     ApiNotFoundResponse,
//     ApiOkResponse,
//     ApiOperation,
//     ApiParam
//   } from '@nestjs/swagger'
  import BaseFilter from '../../dto/BaseFilter'
  import { ListUserResponse } from '../../dto/ListUserResponse'
//   import { AdminGuard } from '../auth/admin.guard'
//   import { UserGuard } from '../auth/user.guard'
  import { User } from '../../entities/User'
  import { UserService } from './user.service'
  
  @Controller('user')
  export class UserController {
    constructor(private readonly service: UserService) {}
  
    @Get('all')
    // @ApiOperation({ summary: 'Get all users' })
    // @ApiOkResponse({
    //   description: 'List of users',
    //   type: ListUserResponse
    // })
    // @ApiNotFoundResponse({ description: 'User not found' })
    async getAll(
      @Body() filters: Partial<User> & BaseFilter
    ): Promise<ListUserResponse | any> {
      const users = await this.service.getAll()
      if (!users) {
        throw new NotFoundException()
      }
      return {
        data: users
      }
    }
  
//     @UseGuards(UserGuard)
//     @Get('/me')
//     @ApiOperation({ summary: 'Get my data' })
//     @ApiOkResponse({ description: 'The user', type: User })
//     @ApiNotFoundResponse({ description: 'User not found' })
//     async me(@Request() req): Promise<User> {
//       const user = await this.service.get(req.user.network)
  
//       if (!user) {
//         throw new NotFoundException('User not found')
//       }
  
//       return user
//     }
  
//     @Get(':network')
//     @ApiOperation({ summary: 'Get user by network' })
//     @ApiParam({
//       name: 'network',
//       description: 'The user network',
//       type: 'string'
//     })
//     @ApiOkResponse({ description: 'The user', type: User })
//     @ApiNotFoundResponse({ description: 'User not found' })
//     async get(@Param('network') network: string): Promise<User> {
//       const user = await this.service.get(network)
  
//       if (!user) {
//         throw new NotFoundException('User not found')
//       }
  
//       return user
//     }
  
//     @UseGuards(AdminGuard)
//     @Put(':id/update')
//     @ApiOperation({ summary: 'Update user data by id' })
//     @ApiParam({ name: 'id', description: 'The user id', type: 'number' })
//     @ApiBody({ description: 'The user data', type: User })
//     @ApiOkResponse({
//       description: 'User updated successfully'
//     })
//     @ApiNotFoundResponse({ description: 'User not found' })
//     async edit(
//       @Param('id') id: number,
//       @Body() body: Partial<User>
//     ): Promise<boolean> {
//       return this.service.edit(id, body)
//     }
  
//     @UseGuards(AdminGuard)
//     @Post()
//     @ApiOperation({ summary: 'Create new user' })
//     @ApiBody({ description: 'The user data', type: User })
//     @ApiCreatedResponse({
//       description: 'User created successfully',
//       type: User
//     })
//     @ApiBadRequestResponse({ description: 'User data malformed' })
//     async create(@Body() body: User): Promise<User> {
//       return this.service.create(body)
//     }
  
//     @UseGuards(AdminGuard)
//     @Delete(':network')
//     @ApiOperation({ summary: 'Delete user by network' })
//     @ApiParam({ name: 'network', description: 'The user network', type: String })
//     @ApiOkResponse({
//       description: 'User deleted successfully'
//     })
//     @ApiNotFoundResponse({ description: 'User not found' })
//     async delete(@Param('network') network: string): Promise<boolean> {
//       return this.service.delete(network)
//     }
  }
  