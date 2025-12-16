"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const core_1 = require("@angular/core");
exports.API = {
    endpoints: {
        token: '/token',
        tokenRevocation: '/token/revocation',
    },
    domains: {
        bucketDomain: (0, core_1.isDevMode)() ? `http://localhost:5000` : ``,
    },
};
//# sourceMappingURL=api.js.map