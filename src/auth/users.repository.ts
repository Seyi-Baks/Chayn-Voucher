import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as argon2 from "argon2";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    async createUser(authCredentials: AuthCredentialsDto): Promise<void> {
        const {email, password} = authCredentials;

        try {
            const hashedPassword = await argon2.hash(password);
            const user = this.create({email, password: hashedPassword});
            await this.save(user)
        } catch (error) {
            //Error code for duplicates in TypeORM
            if(error.code === '23505'){
                throw new ConflictException("Username already exists");
            }
        }
    }
}