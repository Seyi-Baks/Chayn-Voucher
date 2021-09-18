import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganisationRepository } from 'src/organisation/organisations.repository';
import { RedemVoucherDto } from './dto/redeem-voucher.dto';
import { VoucherRepository } from './voucher.repository';

@Injectable()
export class VoucherService {
    constructor(@InjectRepository(VoucherRepository) private voucherRepository: VoucherRepository, @InjectRepository(OrganisationRepository) private organisationRepository: OrganisationRepository){

    }

    public async redeemVoucher(voucherDetails: RedemVoucherDto): Promise<RedemVoucherDto>{
        //Check to see if organisation exists
        const organisation = this.organisationRepository.findOne(voucherDetails.organisationId);

        if(!organisation){
            throw new HttpException('Organisation Not Found', HttpStatus.NOT_FOUND); 
        }

        return this.voucherRepository.redeemVoucher(voucherDetails);
    }
}
