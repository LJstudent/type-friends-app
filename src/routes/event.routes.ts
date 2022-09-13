import { Router } from "express";
import { createEvent, getEvents } from "../controllers/event.controller";

const router = Router();

// register routes
router.post('', createEvent)
router.get('', getEvents)


export default router
