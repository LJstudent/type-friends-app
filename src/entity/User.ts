import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Event } from "./event/Event"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Event, (event) => event.user)
    event: Event[]

}
