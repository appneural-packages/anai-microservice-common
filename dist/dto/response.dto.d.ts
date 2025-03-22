export declare class ResponseDto<T = any> {
    success: boolean;
    statusCode: number;
    message: string;
    data?: T;
    errorCode?: number;
    errors?: any;
    constructor(success: boolean, statusCode: number, message: string, data?: T, errorCode?: number, errors?: any);
}
