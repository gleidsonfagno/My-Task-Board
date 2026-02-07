import { Request, Response } from "express";

import connection from "../../database/connection";

class TasksController {
  async index(request: Request, response: Response) {
    try {
      const {boardId} = request.params;

      const task = await connection("tasks").where("board_id", boardId)

      return response.status(200).json(task);
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Internal server error",
      });
    }
  }

  async show(request: Request, response: Response) {
    const { taskId } = request.params;

    const task = await connection("tasks").where("id", taskId).first();

    if (!task) {
      return response.json({
        messege: "Task not fond",
      });
    }

    return response.json(task);
  }

  async create(request: Request, response: Response) {
    const {boardId } = request.params;
    const { title, description, status, icon } = request.body;

    try {
      const boardExists = await connection("boards").where("id", boardId).first();

      if (!boardExists) {
        return response.status(400).json({
          menssege: "Board not found",
        });
      }
      const [id] = await connection("tasks")
        .insert({
          board_id: boardId,
          title,
          description,
          status,
          icon,
        })
        .returning("*");

      return response.status(201).json(id);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async update(request: Request, response: Response) {
    const { taskId } = request.params;
    const { title, description, status, icon } = request.body;

    try {
      const updated_at = new Date();

      const [task] = await connection("tasks")
        .where("id", taskId)
        .update({ title, description, status, icon, updated_at })
        .returning("*")

      if (!task) {
        return response.status(404).json({
          messege: "Taks not found",
        });
      }

      return response.status(200).json(task);

    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  }

  async remove(request: Request, response: Response) {
    const { taskId } = request.params;

    const existingTask = await connection("tasks").delete().where("id", taskId);

    if (existingTask === 0) {
      return response.status(404).json({
        messege: "Tasks not found",
      });
    }

    return response.json({ message: "Task deleted succesfully" });
  }
}

export { TasksController };
