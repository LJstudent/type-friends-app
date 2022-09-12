import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { CreateEvent } from "./event/CreateEvent"

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

    @OneToMany(() => CreateEvent, (createEvent) => createEvent.user)
    createEvent: CreateEvent[]

}
