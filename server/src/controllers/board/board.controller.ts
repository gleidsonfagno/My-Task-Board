import { Request, Response } from "express";
import connection from "../../database/connection";

class BoardsController {
  async index(request: Request, response: Response) {
    try {
      const boards = await connection("boards").select("*");

      return response.status(200).json(boards);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async show(request: Request, response: Response) {
    const { boardId } = request.params;

    const board = await connection("boards").where("id", boardId).first();

    if (!board) {
      return response.status(404).json({
        messege: "Board not found",
      });
    }
    const tasks = await connection("tasks").where("board_id", boardId)

    return response.json({
      ...board,
      tasks,
    });
  }

  async create(request: Request, response: Response) {

    const { name, description } = request.body;

    try {
      const [board] = await connection("boards")
        .insert({ name, description })
        .returning("*");

      return response.status(201).json(board);
    } catch (error) {
      return response.status(500).json({
        messege: "Failed to create board",
      });
    }
  }

  async update(request: Request, response: Response) {
    const { boardId } = request.params;
    const { name, description } = request.body;

    try {
      const updated_at = new Date();
      
      const [board] = await connection("boards")
        .where("id", boardId)
        .update({ name, description, updated_at })
        .returning("*");

      if (!board) {
        return response.status(404).json({ messege: "Board not found" });
      }

      return response.status(200).json(board);
    } catch (error) {
        console.log(error);
      return response.status(500).json({
        messege: "Failed to update board",
      });
    }
  }

  async remove(request: Request, response: Response) {
    const { boardId } = request.params;

    const existingBoard = await connection("boards")
      .delete()
      .where("id", boardId);

    if (existingBoard === 0) {
      return response.status(404).json({
        messege: "Board not found",
      });
    }

    return response.json({ message: "Board deleted succesfully" });
  }
}
export { BoardsController };
