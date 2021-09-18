import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { OrganisationRepository } from 'src/organisation/organisations.repository';
import { VoucherController } from './voucher.controller';
import { VoucherRepository } from './voucher.repository';
import { VoucherService } from './voucher.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrganisationRepository]),
    TypeOrmModule.forFeature([VoucherRepository]),
    AuthModule
  ],
  controllers: [VoucherController],
  providers: [VoucherService]
})
export class VoucherModule { }
