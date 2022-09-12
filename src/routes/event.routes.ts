import { Router } from "express";
import { createEvent } from "../controllers/event.controller";

const router = Router();

// register routes
router.post('', createEvent)


export default router
