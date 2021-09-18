import { IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class RedemVoucherDto {
    @IsString()
    userEmail: string;

    @IsString()
    organisationId: string;

    @IsString()
    voucherNumber: string;
}