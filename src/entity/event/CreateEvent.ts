import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "../User"

@Entity()
export class CreateEvent {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    activity: string

    @Column()
    date: Date

    @ManyToOne(() => User, (user) => user.createEvent)
    user: User

}
