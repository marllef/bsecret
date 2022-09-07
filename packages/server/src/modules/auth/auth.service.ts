import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAccount(username: string, password: string) {
    const account = await this.accountService.findByUsername(username);
    if (!account) throw new UnauthorizedException('Credenciais inválidas.');
    const isValidPass = await bcrypt.compare(password, account.password);

    if (account && isValidPass) {
      account.password = undefined;
      return account;
    }
    return null;
  }

  async login(account: User) {
    const payload = {
      username: account.username,
      email: account.email,
      sub: account.id,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async register(data: RegisterDTO) {
    const registered = await this.accountService.create(data);
    return registered;
  }

  async validate(token: string) {
    const decoded = this.jwtService.decode(token);

    if (!decoded || typeof decoded === 'string') {
      throw new UnauthorizedException('Token inválido');
    }

    const account = await this.accountService.findByID(decoded.sub);
    account.password = undefined;
    return account;
  }
}
