export declare class LoggingService {
    private readonly logger;
    log(message: string): void;
    warn(message: string): void;
    error(message: string, trace?: string): void;
}
