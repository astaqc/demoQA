import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './users.resolver';

@Module({
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule {}
