import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { UpdateUserDto } from 'src/dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prismaService.user.update({
      where: { id },
      data: updateUserDto
    });

    return updatedUser ? true : false;
  }

  async remove(id: string) {
    const deletedUser = await this.prismaService.user.delete({ where: { id } });

    return deletedUser ? true : false;
  }
}
