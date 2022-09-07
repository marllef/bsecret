import {
  Body,
  Controller,
  Get,
  Head,
  Header,
  Param,
  Post,
  Req,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { Request as ExpRequest } from 'express';
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

  @Get('/validate')
  async validate(@Req() req: ExpRequest) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) throw new UnauthorizedException('Token inválido');

    return await this.authService.validate(token);
  }
}
