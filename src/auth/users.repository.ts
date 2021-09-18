import { EntityRepository, Repository } from "typeorm";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
    async createUser(authCredentials: AuthCredentialsDto): Promise<void> {
        const user = this.create(authCredentials)
        await this.save(user)
    }
}