export type TaskData = {
  id: number;
  board_id: number;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  icon: string;
};

export const data: TaskData[] = [
  {
    id: 2,
    board_id: 1,
    title: "Segunda tarefa",
    description: "Descrição da tarefa",
    status: "In Progress",
    icon: "📌",
    created_at: "2025-12-11T01:24:42.461Z",
    updated_at: "2025-12-11T01:24:42.461Z",
  },
  {
    id: 4,
    board_id: 1,
    title: "Minha tarefa em produção",
    description: "Descrição da tarefa",
    status: "In Progress",
    icon: "📌",
    created_at: "2025-12-11T02:24:09.812Z",
    updated_at: "2025-12-11T02:24:09.812Z",
  },
  {
    id: 3,
    board_id: 1,
    title: "Segunda tarefa atualizada em produção",
    description: "atualizado Descrição da tarefa ",
    status: "Completed",
    icon: "📌",
    created_at: "2025-12-11T01:24:21.985Z",
    updated_at: "2025-12-11T02:25:11.784Z",
  },
  {
    id: 1,
    board_id: 1,
    title: "Segunda tarefa atualizada em produção",
    description: "atualizado Descrição da tarefa ",
    status: "Won't do",
    icon: "📌",
    created_at: "2025-12-11T01:24:21.985Z",
    updated_at: "2025-12-11T02:25:11.784Z",
  },
];
