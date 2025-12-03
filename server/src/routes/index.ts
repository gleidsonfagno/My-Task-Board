import { Router } from "express";
import { boardsRoutes } from "./board/board-routes";

const route = Router()

route.use("/boards", boardsRoutes)

export {route}