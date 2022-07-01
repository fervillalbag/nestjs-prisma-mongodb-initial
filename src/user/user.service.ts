import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDTO: CreateUserDTO) {
    return await this.prisma.user.create({
      data: createUserDTO,
    });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }
}
