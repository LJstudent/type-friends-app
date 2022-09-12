import * as express from "express"
import { AppDataSource } from "./data-source"
import indexRoutes from "./routes/index.routes"

AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(express.json())
    app.use(indexRoutes)

    app.listen(3004);
    console.log('Server on port', 3004);

}).catch(error => console.log(error))
