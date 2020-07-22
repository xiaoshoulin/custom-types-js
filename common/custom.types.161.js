"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenId = exports.RawAmount = exports.Address = void 0;
const codec_1 = require("@polkadot/types/codec");
const primitive_1 = require("@polkadot/types/primitive");
const generic_1 = require("@polkadot/types/generic");
class Address extends generic_1.GenericAccountId {
}
exports.Address = Address;
class RawAmount extends codec_1.UInt {
    constructor(registry, value) {
        super(registry, value, 128);
    }
}
exports.RawAmount = RawAmount;
class TokenId extends primitive_1.u32 {
    constructor(registry, value) {
        super(registry, value);
    }
}
exports.TokenId = TokenId;
//# sourceMappingURL=custom.types.161.js.map