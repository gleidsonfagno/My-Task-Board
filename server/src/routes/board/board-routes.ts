import { Router } from "express";
import { BoardsController } from "../../controllers/board/board.controller";

const boardsRoutes = Router()
const boardsController = new BoardsController()

boardsRoutes.get("/", boardsController.index)

boardsRoutes.get("/:boardId", boardsController.show)

export {boardsRoutes}