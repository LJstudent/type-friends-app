import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Genre } from "../entity/Genre"

export const getGenres = async function (req: Request, res: Response) {
    const genres = await AppDataSource.getRepository(Genre).find()
    res.json(genres)
}