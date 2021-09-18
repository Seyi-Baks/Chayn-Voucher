import { Voucher } from "src/voucher/voucher.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organisation{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    name: string;

    @OneToMany(_type => Voucher, (voucher) => voucher.organisationId, { eager: false})
    voucher: Voucher[];
}