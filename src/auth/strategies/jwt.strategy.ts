import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
import { config } from '../../user/util/constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secret,
    });
  }

  async validate(payload: any): Promise<any> {
    const user = this.userService.findOneByEmail(payload.email);
    return user;
  }
}