"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseFilter {
    constructor() {
        this.limit = 20;
        this.page = 0;
    }
    getPage() {
        return this.limit * this.page;
    }
}
exports.default = BaseFilter;
//# sourceMappingURL=BaseFilter.js.map