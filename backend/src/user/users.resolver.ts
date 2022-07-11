import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UserService } from './user.service';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guard/gql.guard';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver()
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly _userService: UserService) {}

  @Query()
  async userById(@Args('id') id: string): Promise<any> {
    const data = this._userService.findOne(+id);
    if (data === undefined) {
      throw new NotFoundException('No user found!');
    }
    return data;
  }

  @Query()
  async user(): Promise<any> {
    return this._userService.findAll();
  }

  @Query()
  async delete(@Args('id') id: string) {
    const data = await this._userService.findOne(+id);
    if (data === undefined) {
      throw new NotFoundException('No user found!');
    }
    await this._userService.remove(data.userId);
    return true;
  }


  @Mutation()
  createUser(@Args('create') createUserDto: CreateUserDto): any {
    return this._userService.create(createUserDto);
  }

  @Mutation()
  updateUser(@Args('id') id: string, @Args('update') updateUserDto: UpdateUserDto): any {
    const data = this._userService.findOne(+id);
    if (data === undefined) {
      throw new NotFoundException('No user found!');
    }
    return this._userService.update(data.userId, updateUserDto);
  }
}
