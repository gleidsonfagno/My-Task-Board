import { Router } from "express";
import { TasksController } from "../../controllers/";

const tasksRoute = Router()

const tasksController = new TasksController()

tasksRoute.get("/", tasksController.index)

export {tasksRoute}