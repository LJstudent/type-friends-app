import { Router } from "express";
import { getGenres } from "../controllers/genre.controller";

const router = Router();

// register routes
router.get('', getGenres)


export default router