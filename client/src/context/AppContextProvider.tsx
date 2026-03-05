
import { useCallback, useState } from "react";
import { type Board } from "../types/data";
import { getBoard, saveBoard } from "../utils/storage";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<Board | null>(null);

  const createBoardIfNotExists = useCallback(() => {
    const existingBoard = getBoard();

    if(existingBoard) {
      setBoard(existingBoard);
      return
    }

    const newBoard: Board = {
      id: crypto.randomUUID(),
      title: "My Task Board",
      description: "Tasks to keep organized",
      tasks: [
        {
          id: crypto.randomUUID(),
          title: "Primeira tarefa",
          description: "Descrição 1",
          icon: "https://img.icons8.com/color/48/000000/idea.png",
          status: "In Progress",
          board_id: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Segunda tarefa",
          description: "Descrição 2",
          icon: "https://img.icons8.com/color/48/000000/muscle.png",
          status: "Completed",
          board_id: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Terceira tarefa",
          description: "Descrição 3",
          icon: "https://img.icons8.com/color/48/000000/idea.png",
          status: "Won't do",
          board_id: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
      ],
    };

    saveBoard(newBoard)
    setBoard(newBoard)
    
  }, []);


  const value = {
    board,
    createBoardIfNotExists
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
