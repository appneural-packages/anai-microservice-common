import { ArgumentsHost, RpcExceptionFilter } from '@nestjs/common';
export declare class RpcExceptionsFilter implements RpcExceptionFilter {
    private readonly logger;
    catch(exception: any, host: ArgumentsHost): any;
}
