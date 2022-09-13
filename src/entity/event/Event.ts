import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "../User"

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    activity: string

    @Column()
    date: Date

    @ManyToOne(() => User, (user) => user.event)
    user: User

}
