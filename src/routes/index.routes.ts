import { Router } from "express"
import eventRoutes from "./event.routes"
import userRoutes from "./user.routes"

const router = Router()

router.use('/users', userRoutes)
router.use('/event', eventRoutes)

export default router