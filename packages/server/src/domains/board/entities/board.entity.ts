import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'board' })

export class BoardEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    reg_date: Date;

    @UpdateDateColumn()
    mod_date: Date;

    @DeleteDateColumn()
    remove_date: Date;
}
