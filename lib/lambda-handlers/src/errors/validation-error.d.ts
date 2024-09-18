import ClbError, { InvalidParam } from './clb-error';
export default class ValidationError extends ClbError {
    constructor(message: string, invalidParams: InvalidParam[]);
}
