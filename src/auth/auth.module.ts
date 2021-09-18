import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
    secret: 'chanyvoucher',
    signOptions: {
      expiresIn: 3600 //expires in 1 hour
    }}),
    TypeOrmModule.forFeature([UsersRepository])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
