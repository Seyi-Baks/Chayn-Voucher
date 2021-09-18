import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RedemVoucherDto } from './dto/redeem-voucher.dto';
import { VoucherService } from './voucher.service';

@Controller('voucher')
// @UseGuards(AuthGuard())
export class VoucherController {
    constructor(private voucherService: VoucherService){

    }

    @Post('/redeem-voucher')
    redeemVoucher(@Body() redeemVoucher: RedemVoucherDto): Promise<RedemVoucherDto>{
        return this.voucherService.redeemVoucher(redeemVoucher);
    }
}
