import { Router } from "express";
import { BoardsController } from "../../controllers/board/board.controller";
import { validate } from "../../middlewares/board/middleware";
import { createBoardSchema } from "../../validations/create-board.schema";

const boardsRoutes = Router()
const boardsController = new BoardsController()

boardsRoutes.get("/", boardsController.index)

boardsRoutes.get("/:boardId", boardsController.show)

boardsRoutes.post("/", validate(createBoardSchema), boardsController.create)

export {boardsRoutes}