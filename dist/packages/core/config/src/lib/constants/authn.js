"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTH = void 0;
const AUTH = (key) => ({
    Accept: 'application/json',
    'Content-type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${key}`,
});
exports.AUTH = AUTH;
//# sourceMappingURL=authn.js.map