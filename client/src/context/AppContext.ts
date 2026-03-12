import { createContext } from "react";
import type { Board, CreateTaskData } from "../types/data";
interface AppContextType { 
  board: Board | null | undefined;
  addTask: (taskData: CreateTaskData) => void
  deleteTask: (id: string) => void
  createBoardIfNotExists: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined)