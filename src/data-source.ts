import "reflect-metadata"
import { DataSource } from "typeorm"
import { database, password, username } from "../.config"
import { Event } from "./entity/event/Event"
import { Genre } from "./entity/Genre"
import { User } from "./entity/User"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3301,
    username: username,
    password: password,
    database: database,
    synchronize: true,
    logging: false,
    entities: [User, Event, Genre],
    migrations: [],
    subscribers: [],
})
