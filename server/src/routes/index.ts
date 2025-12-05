import { Router } from "express";
import { boardsRoutes } from "./board/board-routes";
import { tasksRoute } from "./task/task-routes";

const route = Router()

route.use("/boards", boardsRoutes)
route.use("/tasks", tasksRoute)

export {route}