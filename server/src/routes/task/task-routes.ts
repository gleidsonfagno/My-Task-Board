import { Router } from "express";
import { TasksController } from "../../controllers/";
import { validate } from "../../middlewares/board/middleware";
import { createTaskSchema, updateTaskSchema } from "../../validations/create-task.schema";

const tasksRoute = Router()

const tasksController = new TasksController()

tasksRoute.get("/", tasksController.index)
tasksRoute.post("/", validate(createTaskSchema), tasksController.create)
tasksRoute.put("/:taskId", validate(updateTaskSchema), tasksController.update)
tasksRoute.delete("/:taskId", tasksController.remove)

export {tasksRoute}