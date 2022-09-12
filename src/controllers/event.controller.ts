import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { CreateEvent } from "../entity/event/CreateEvent"

export const createEvent = async function (req: Request, res: Response) {
    const createEvent = await AppDataSource.getRepository(CreateEvent).create(req.body)
    const results = await AppDataSource.getRepository(CreateEvent).save(createEvent)
    return res.send(results)
}