import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Event } from "../entity/event/Event"

export const createEvent = async function (req: Request, res: Response) {
    const createEvent = await AppDataSource.getRepository(Event).create(req.body)
    const results = await AppDataSource.getRepository(Event).save(createEvent)
    return res.send(results)
}

export const getEvents = async function (req: Request, res: Response) {
    const events = await AppDataSource.getRepository(Event).find()
    res.json(events)
}