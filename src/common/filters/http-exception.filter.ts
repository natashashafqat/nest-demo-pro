import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const statusCode = exception.getStatus();

        console.log(request);

        return response.status(statusCode).json({
            status: statusCode,
            timestamp: new Date().toISOString(),
            path: request.path,
            error: exception.message
        })
    }

}