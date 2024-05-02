import { Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
    constructor(private readonly _authService: AuthService) { }

    @Get()
    getHello(): string {
        return this._authService.getHello();
    }
}