import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateAccount } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '~/utils/prisma.service';

@Injectable()
export class AccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAccount) {
    const exists = await this.prisma.account.findFirst({
      where: {
        username: data.username,
        OR: {
          email: data.email,
        },
      },
    });

    if (exists) throw new ConflictException('Usuário já cadastrado.');

    const { password, ...rest } = data;
    const hashed = await bcrypt.hash(password, 10);

    const created = await this.prisma.account.create({
      data: {
        password: hashed,
        ...rest,
      },
    });

    return created;
  }

  async findAll() {
    return await this.prisma.account.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        displayName: true,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.prisma.account.findFirst({
      where: {
        username,
      },
    });
  }

  async findByEmail(email: string) {
    return await this.prisma.account.findUnique({
      where: {
        email,
      },
    });
  }

  async findByID(id: string) {
    return await this.prisma.account.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UpdateAccountDto) {
    return await this.prisma.account.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.account.delete({
      where: {
        id,
      },
    });
  }
}
