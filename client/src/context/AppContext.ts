import { createContext } from "react";
import type { Board } from "../types/data";
interface AppContextType { 
  board: Board | null | undefined;
  createBoardIfNotExists: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined)