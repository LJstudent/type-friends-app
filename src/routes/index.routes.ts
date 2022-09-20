import { Router } from "express"
import eventRoutes from "./event.routes"
import genreRoutes from "./genre.routes"
import userRoutes from "./user.routes"

const router = Router()

router.use('/users', userRoutes)
router.use('/event', eventRoutes)
router.use('/genre', genreRoutes)

export default router