import {Request, Response } from "express"
import connection from "../../database/connection";

class BoardsController {

    async index(request: Request, response: Response) {
        
        try {
            const boards = await connection("boards").select("*");

            return  response.json(boards)
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao buscar boards"
            })
        }
    }

    async show(request: Request, response: Response) {
        const {boardId } = request.params

        const board = await connection("boards").where("id", boardId ).first()
        
        if(!board) {
            return response.status(404).json({
                messege: "Id Board not found"
            })
        }

        return response.json(board)
    }

    async  create(request: Request, response: Response) {
        const {name} = request.body

        try {
            const [id] = await connection("boards").insert({name})

            const board = await connection("boards").where("id", id).first()

            return response.status(201).json(board)
        } catch (error) {
            return response.status(500).json({
                messege: "Erro ao cria o board"
            })
        }
    }

}
export { BoardsController }