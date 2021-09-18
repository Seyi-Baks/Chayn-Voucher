import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import * as argon2 from "argon2";
import { Organisation } from "./organisation.entity";
import { CreateOrganisationDto } from "./dto/create-organisation.dto";

@EntityRepository(Organisation)
export class OrganisationRepository extends Repository<Organisation> {
    async createOrganisation(organisationDetails: CreateOrganisationDto): Promise<void> {
        const {name} = organisationDetails;

        try {
            const organisation = this.create({name});
            await this.save(organisation)
        } catch (error) {
            //Error code for duplicates in TypeORM
            if(error.code === '23505'){
                throw new ConflictException("Organisation already exists");
            }
        }
    }

}