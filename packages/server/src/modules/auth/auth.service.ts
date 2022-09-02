import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from '../account/account.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Account, User } from '@prisma/client';
import { RegisterDTO } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAccount(username: string, password: string) {
    const account = await this.accountService.findByUsername(username);
    if (!account) throw new UnauthorizedException('Credenciais inválidas.');
    const isValidPass = await bcrypt.compare(password, account.password);

    if (account && isValidPass) {
      return account;
    }
    return null;
  }

  async login(account: Account) {
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
    registered.password = undefined;
    return registered;
  }
}
