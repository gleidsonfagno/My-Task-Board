import { Request , Response } from "express";

import connection from "../../database/connection"

class TasksController  {
    async index (request: Request, response: Response) {
        
        try {
            const task = await connection("tasks").select("*")

            return response.status(201).json(task)
            
        } catch (error) {
            console.log(error)
            return response.status(500).json({
                message: "Internal server error"
            })
        }
    }

    async create (request: Request, response: Response) {
        
        try {
            const {board_id, title, description, status, icon,  } = request.body 
            const boardExists = await connection("boards").where("id", board_id).first()
            
            if (!boardExists) {
                return response.status(400).json({
                    menssege: "Board not found"
                })
            }
            const [id] = await connection("tasks").insert({
                board_id,
                title,
                description,
                status,
                icon
            })


            return response.status(201).json({id})
        } catch (error) {
            console.error(error);
            return response.status(500).json({ error: "Internal server error" });
        }
    }
}

export {TasksController}