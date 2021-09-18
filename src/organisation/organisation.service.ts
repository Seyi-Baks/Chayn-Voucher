import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { Organisation } from './organisation.entity';
import { OrganisationRepository } from './organisations.repository';

@Injectable()
export class OrganisationService {

    constructor(@InjectRepository(OrganisationRepository) private organisationRepository: OrganisationRepository){

    }

    public async createOrganisation(organisationDetails: CreateOrganisationDto): Promise<void>{
        return this.organisationRepository.createOrganisation(organisationDetails)
    }

    public async getOrganisation(id: string): Promise<Organisation> {
        const organisation = this.organisationRepository.findOne({id});
        if(organisation){
            return organisation
        }else{
            throw new HttpException('Organisation Not Found', HttpStatus.NOT_FOUND); 
        }
    }
}
