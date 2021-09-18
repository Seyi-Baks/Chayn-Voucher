import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationController } from './organisation.controller';
import { OrganisationService } from './organisation.service';
import { OrganisationRepository } from './organisations.repository';

@Module({
  imports: [TypeOrmModule.forFeature([OrganisationRepository])],
  controllers: [OrganisationController],
  providers: [OrganisationService]
})
export class OrganisationModule {}
