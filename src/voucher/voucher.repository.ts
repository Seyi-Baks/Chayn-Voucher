import { ConflictException } from "@nestjs/common";
import { CreateOrganisationDto } from "src/organisation/dto/create-organisation.dto";
import { Organisation } from "src/organisation/organisation.entity";
import { EntityRepository, Repository } from "typeorm";
import { RedemVoucherDto } from "./dto/redeem-voucher.dto";
import { Voucher } from "./voucher.entity";

@EntityRepository(Voucher)
export class VoucherRepository extends Repository<Voucher> {
    async redeemVoucher(voucherDetails: RedemVoucherDto): Promise<RedemVoucherDto> {
        const {userEmail, organisationId, voucherNumber} = voucherDetails;

        try {
            const redeemVoucher = this.create({userEmail, organisationId, voucherNumber});
            await this.save(redeemVoucher);

            return {
                userEmail, 
                organisationId, 
                voucherNumber
            }
        } catch (error) {
            //Error code for duplicates in TypeORM
            if(error.code === '23505'){
                throw new ConflictException("Voucher already in use");
            }
        }
    }

}
