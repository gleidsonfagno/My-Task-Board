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
                messege: "Id Board não encontrado"
            })
        }

        return response.json(board)
    }

    async  create(request: Request, response: Response) {
        const {name, description} = request.body

        try {
            const [id] = await connection("boards").insert({name, description})

            const board = await connection("boards").where("id", id).first()

            return response.status(201).json(board)
        } catch (error) {
            return response.status(500).json({
                messege: "Erro ao cria o board"
            })
        }
    }

    async update (request: Request, response: Response){
        const {boardId} =  request.params
        const  {name, description} =  request.body

        try {
            const updated_at = new Date().toISOString()
            const upadated = await connection("boards").update({name, description , updated_at}).where("id", boardId)
            
            if(!upadated) {
                return response.status(404).json({messege: "Board nâo encontrado"})
            }

            const board = await connection("boards").where("id", boardId).first()
            return response.json(board)
        } catch (error) {
            return response.status(500).json({
                messege: "Erro ao atualizar o board"
            })
        }

    }

    async remove (request: Request, response: Response) {
        const {boardId} = request.params

        const existingBoard = await connection("boards").delete().where("id", boardId)
        
        if(!existingBoard) {
            return response.json({
                messege: "Board não encontrado"
            })
        }
        
        return response.json({ message: "Board deletado com sucesso" })

        
        
    }

}
export { BoardsController }