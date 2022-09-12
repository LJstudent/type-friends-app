import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

// register routes
export const getUsers = async function (req: Request, res: Response) {
    const users = await AppDataSource.getRepository(User).find()
    res.json(users)
}

export const getUser = async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).findOneBy({
        id: Number(req.params.id),
    })
    return res.send(results)
}

export const createUser = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).create(req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
}

export const updateUser = async function (req: Request, res: Response) {
    const user = await AppDataSource.getRepository(User).findOneBy({
        id: Number(req.params.id),
    })
    AppDataSource.getRepository(User).merge(user, req.body)
    const results = await AppDataSource.getRepository(User).save(user)
    return res.send(results)
}

export const deleteUser = async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(User).delete(req.params.id)
    return res.send(results)
}