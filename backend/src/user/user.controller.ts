import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): any {
    createUserDto.userId = Math.floor(Math.random() * 100);
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): any {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): any {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): any {
    return this.userService.remove(+id);
  }
}
