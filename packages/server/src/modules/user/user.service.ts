import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from '~/utils/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.user.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
