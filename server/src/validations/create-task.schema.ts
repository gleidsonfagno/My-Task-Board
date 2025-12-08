import { string, z } from "zod";

export const createTaskSchema = z.object({
    board_id: z.number(),
    title: z.string()
    .min(1, "O titulo e obigatório")
    .min(3, "O titulo precisa ter pelo menos 3 caracteres"),
    description: z.string().nullable().optional(),
    status: z.enum(["In Progress", "Completed", "Won't do"], {
         error: "Status inválido"
    }),
    icon: z.string().min(1, "O ícone é obrigatório")

})