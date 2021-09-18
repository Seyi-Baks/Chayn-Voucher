import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Organisation{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    name: string;
}