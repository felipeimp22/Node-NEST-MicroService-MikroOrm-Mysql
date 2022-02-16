import { EntityRepository } from '@mikro-orm/knex';
import { User } from '../../entities/User';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: EntityRepository<User>);
    get(network: string): Promise<User | null>;
    getAll(): Promise<User[]>;
    create(body: Partial<User>): Promise<User>;
    edit(id: number, body: Partial<User>): Promise<boolean>;
    delete(network: string): Promise<boolean>;
}
