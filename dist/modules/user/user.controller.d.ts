import BaseFilter from '../../dto/BaseFilter';
import { ListUserResponse } from '../../dto/ListUserResponse';
import { User } from '../../entities/User';
import { UserService } from './user.service';
export declare class UserController {
    private readonly service;
    constructor(service: UserService);
    getAll(filters: Partial<User> & BaseFilter): Promise<ListUserResponse | any>;
}
