import express from "express";
import { bookRoutes } from "./interface/routes/bookRoutes";
import { errorHandler } from "./interface/middleware/errorHandler";
import {logger} from "./infrastructure/logger"

const app = express();

app.use(express.json());
app.use("/api", bookRoutes);
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);

});