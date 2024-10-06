import Joi from "joi";
interface Result<T> {
    errors?: ValidationError<T>[];
    data?: T;
}
interface ValidationError<T> {
    name: string;
    value: T;
    reason: string;
}
declare const validateSchema: <T>(schema: Joi.ObjectSchema<T>, data: T) => Result<T>;
export default validateSchema;
