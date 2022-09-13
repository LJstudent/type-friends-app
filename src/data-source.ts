import "reflect-metadata"
import { DataSource } from "typeorm"
import { Event } from "./entity/event/Event"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3301,
    username: "******",
    password: "*******",
    database: "*******",
    synchronize: true,
    logging: false,
    entities: [User, Event],
    migrations: [],
    subscribers: [],
})
