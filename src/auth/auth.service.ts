import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UsersRepository) private usersRepository: UsersRepository, private jwtService: JwtService){

    }

    public async registerUser(authCredentials: AuthCredentialsDto): Promise<void> {
        return this.usersRepository.createUser(authCredentials)
    }

    public async signInUser({ email, password }: AuthCredentialsDto): Promise<{ accessToken: string}> {
            const user = await this.usersRepository.findOne({email});

            if(user && (await argon2.verify(user.password, password))){
                const accessToken = await this.jwtService.sign({ email }); 
                return { accessToken };
            }else{
                throw new UnauthorizedException('Plese check your login credentials');
            }
    }
}
