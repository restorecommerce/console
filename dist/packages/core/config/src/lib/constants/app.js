"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP = exports.objectUpload = void 0;
const name = 'Restorecommerce';
const supported = [
    {
        code: 'en',
        name: 'English',
    },
    {
        code: 'de',
        name: 'Deutsch',
    },
];
exports.objectUpload = {
    storageURL: 'http://localhost:5000/graphql',
    bucketName: 'public',
    keyPrefix: 'nfuse-shop',
};
exports.APP = {
    name,
    logoUrl: '/assets/images/restore_commerce_logo_square.png',
    languages: {
        default: Object.assign({}, supported[0]),
        supported,
    },
    objectUpload: exports.objectUpload,
};
//# sourceMappingURL=app.js.map