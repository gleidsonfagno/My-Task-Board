export type Status = "In Progress" | "Completed" | "Won't Do";

export interface Task  {
  id: string;
  board_id: number;
  title: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  icon: string;
};

export interface Board {
  id: string;
  title: string;
  description: string;
  tasks: Task[];
}

export type CreateTaskData = {
  title: string
  description: string
  status: string
  icon: string
}