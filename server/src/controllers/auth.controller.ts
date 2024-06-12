import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpDto } from '../dtos/sign-up.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  async signIn(@Body() signInDto: SignInDto) {
    const { accessToken } = await this.authService.signIn(signInDto);

    return { accessToken };
  }

  @Post('/signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    const { accessToken } = await this.authService.signUp(signUpDto);

    return { accessToken };
  }

  @Get('/verify')
  @UseGuards(AuthGuard)
  async verify(@Req() request: { user?: { sub: string } }) {
    const { user } = await this.authService.verify(request.user.sub);

    return { user };
  }
}
