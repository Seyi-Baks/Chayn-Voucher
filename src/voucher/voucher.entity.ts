import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Voucher{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userEmail: string;

    @Column()
    organisationId: string;

    @Column({unique: true})
    voucherNumber: string;
}