import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return await this.authService.login(req.user);
  }

  @Post('/register')
  async register(@Body() body: RegisterDTO) {
    return await this.authService.register(body);
  }
}
