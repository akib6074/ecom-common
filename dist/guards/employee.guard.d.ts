import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class EmployeeGuard implements CanActivate {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
