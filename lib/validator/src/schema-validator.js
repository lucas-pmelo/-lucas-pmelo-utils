"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSchema = (schema, data) => {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        allowUnknown: false,
    });
    const hasError = error === null || error === void 0 ? void 0 : error.details.length;
    if (hasError) {
        const errors = error.details.map((error) => ({
            name: error.context.key,
            value: error.context.value,
            reason: error.message.replace(/"/g, ""),
        }));
        return {
            errors,
        };
    }
    return { data: value };
};
exports.default = validateSchema;
//# sourceMappingURL=schema-validator.js.map