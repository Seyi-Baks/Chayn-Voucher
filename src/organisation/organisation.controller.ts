import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { OrganisationService } from './organisation.service';

@Controller('organisation')
export class OrganisationController {
    constructor(private organisationService: OrganisationService){

    }

    @Post('/create')
    createOrganisation(@Body() organisationDetails: CreateOrganisationDto){
        return this.organisationService.createOrganisation(organisationDetails)
    }
}
