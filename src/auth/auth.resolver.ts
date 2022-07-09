import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';


@Resolver()
export class AuthResolver {
  constructor(private readonly _authService: AuthService) {}

  @Mutation()
  login(@Args('email') email: string, @Args('password') password: string): any {
    return this._authService.signin(email, password);
  }
  
}
