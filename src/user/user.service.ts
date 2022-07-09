import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

interface User {
  userId: number,
  name: string,
  email: string,
  password: string
}

@Injectable()
export class UserService {
  
  public user: User[] = [
    {
      userId: 1,
      name: 'test',
      email: 'test@gmail.com',
      password: '1234'
    },
    {
      userId: 2,
      name: 'demo',
      email: 'demo@gmail.com',
      password: '1234'
    }
  ]

  create(createUserDto: CreateUserDto) {
    return this.user.push(createUserDto);
  }

  findAll() {
    return this.user;
  }

  findOne(id: number) {
    return this.user.find((user) => user.userId === id);
  }

  findOneByEmail(email: string) {
    return this.user.find((user) => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.user.find((user) => user.userId === id);
    Object.keys(updateUserDto).forEach((key) => {
      user[key] = updateUserDto[key];
    });
    return user;
  }

  remove(id: number) {
    const user = this.user.findIndex((user) => user.userId === id);
    this.user.splice(user, 1);//remove element from array
    return true;
  }
}
