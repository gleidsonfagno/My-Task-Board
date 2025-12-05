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
}

export {TasksController}