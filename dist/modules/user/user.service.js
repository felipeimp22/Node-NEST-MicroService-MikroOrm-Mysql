"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@mikro-orm/core");
const knex_1 = require("@mikro-orm/knex");
const nestjs_1 = require("@mikro-orm/nestjs");
const common_1 = require("@nestjs/common");
const User_1 = require("../../entities/User");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async get(network) {
        return this.userRepository.findOne({ network }, ['profile']);
    }
    async getAll() {
        return this.userRepository.find({ name: core_1.QueryOrder.ASC });
    }
    async create(body) {
        if (!body.name ||
            !body.unitShift ||
            !body.state ||
            !body.network ||
            !body.unitName) {
            throw new common_1.BadRequestException('One of `name, shift, state, network, unit` is missing');
        }
        const user = new User_1.User();
        (0, core_1.wrap)(user).assign(body);
        await this.userRepository.persistAndFlush(user);
        return user;
    }
    async edit(id, body) {
        const user = await this.userRepository.findOne(+id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        (0, core_1.wrap)(user).assign(body);
        await this.userRepository.persistAndFlush(user);
        return true;
    }
    async delete(network) {
        const user = await this.userRepository.findOne({ network });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const deletedBody = Object.assign(Object.assign({}, user), { deleted: true });
        (0, core_1.wrap)(user).assign(deletedBody);
        await this.userRepository.persistAndFlush(user);
        return true;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectRepository)(User_1.User)),
    __metadata("design:paramtypes", [knex_1.EntityRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map