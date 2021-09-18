import { Voucher } from "src/voucher/voucher.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @OneToMany(_type => Voucher, (voucher) => voucher.userEmail, { eager: false})
    voucher: Voucher[];
}