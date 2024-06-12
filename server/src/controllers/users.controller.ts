import {
  Controller,
  Get,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Headers,
  Request
} from '@nestjs/common';

import { AuthGuard } from '../guards/auth.guard';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { UsersService } from '../services/users.service';

@Controller('/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);

    return { user };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const hasUpdated = await this.usersService.update(id, updateUserDto);

    return {
      success: hasUpdated
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const hasDeleted = await this.usersService.remove(id);

    return {
      success: hasDeleted
    };
  }
}
