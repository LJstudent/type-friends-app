import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateEvent } from "./entity/event/CreateEvent"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3301,
    username: "******",
    password: "******",
    database: "******",
    synchronize: true,
    logging: false,
    entities: [User, CreateEvent],
    migrations: [],
    subscribers: [],
})
