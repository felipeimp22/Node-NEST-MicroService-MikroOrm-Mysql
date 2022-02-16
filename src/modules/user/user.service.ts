import { QueryOrder, wrap } from '@mikro-orm/core'
import { EntityRepository } from '@mikro-orm/knex'
import { InjectRepository } from '@mikro-orm/nestjs'
import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import BaseFilter from '../../dto/BaseFilter'
import { User } from '../../entities/User'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>
  ) {}

  async get(network: string): Promise<User | null> {
    return this.userRepository.findOne({ network }, ['profile'])
  }

  async getAll(
    // where: Partial<User>,
    // filter: BaseFilter = new BaseFilter()
  ): Promise<User[]> {
    // if (!where) {
    //   return this.userRepository.findAll(
    //     ['profile'],
    //     { name: QueryOrder.ASC },
    //     // filter.limit,
    //     // filter.getPage()
    //   )
    // }

    return this.userRepository.find(
    //   { ...(where as User) },
    //   ['profile'],
      { name: QueryOrder.ASC },
    //   filter.limit,
    //   filter.getPage()
    )
  }

  async create(body: Partial<User>): Promise<User> {
    if (
      !body.name ||
      !body.unitShift ||
      !body.state ||
      !body.network ||
      !body.unitName
    ) {
      throw new BadRequestException(
        'One of `name, shift, state, network, unit` is missing'
      )
    }

    const user = new User()

    wrap(user).assign(body)

    await this.userRepository.persistAndFlush(user)

    return user
  }

  async edit(id: number, body: Partial<User>): Promise<boolean> {
    const user = await this.userRepository.findOne(+id)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    wrap(user).assign(body)

    await this.userRepository.persistAndFlush(user)

    return true
  }

  async delete(network: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ network })

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const deletedBody = {
      ...user,
      deleted: true
    }

    wrap(user).assign(deletedBody)

    await this.userRepository.persistAndFlush(user)

    return true
  }
}
