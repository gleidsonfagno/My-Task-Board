import { z } from "zod";

export const createBoardSchema = z.object({
  name: z.string()
    .min(1, "O nome é obrigatório")
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
});
