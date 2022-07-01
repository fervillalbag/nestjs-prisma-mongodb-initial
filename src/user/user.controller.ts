import { Response } from 'express';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDTO } from './dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDTO) {
    const user = await this.userService.create(dto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async getUsers(@Res() res: Response) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }
}
