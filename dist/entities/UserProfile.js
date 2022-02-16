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
exports.UserProfile = void 0;
const core_1 = require("@mikro-orm/core");
const class_validator_1 = require("class-validator");
const User_1 = require("./User");
let UserProfile = class UserProfile {
};
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], UserProfile.prototype, "id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => User_1.User),
    __metadata("design:type", User_1.User)
], UserProfile.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], UserProfile.prototype, "profile", void 0);
UserProfile = __decorate([
    (0, core_1.Entity)()
], UserProfile);
exports.UserProfile = UserProfile;
//# sourceMappingURL=UserProfile.js.map