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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_1 = require("@mikro-orm/core");
const class_validator_1 = require("class-validator");
const UserProfile_1 = require("./UserProfile");
let User = class User {
    constructor() {
        this.profile = new core_1.Collection(this);
    }
};
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    __metadata("design:type", String)
], User.prototype, "network", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    __metadata("design:type", String)
], User.prototype, "shiftUser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "unitName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "unitDatasul", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "unitShift", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Boolean)
], User.prototype, "deleted", void 0);
__decorate([
    (0, core_1.OneToMany)(() => UserProfile_1.UserProfile, up => up.user),
    __metadata("design:type", Object)
], User.prototype, "profile", void 0);
User = __decorate([
    (0, core_1.Entity)()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map