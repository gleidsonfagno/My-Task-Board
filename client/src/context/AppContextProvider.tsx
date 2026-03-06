
import { useCallback, useState } from "react";
import { type Board, type CreateTaskData, type Task } from "../types/data";
import { getBoard, saveBoard } from "../utils/storage";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [board, setBoard] = useState<Board | null>(null);

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const createBoardIfNotExists = useCallback(() => {
    const existingBoard = getBoard();

    if(existingBoard) {
      setBoard(existingBoard);
      return
    }

    const newBoard: Board = {
      id: "9",
      title: "My Task Board",
      description: "Tasks to keep organized",
      tasks: [
        {
          id: crypto.randomUUID(),
          title: "Primeira tarefa",
          description: "Descrição 1",
          icon: "https://img.icons8.com/color/48/000000/idea.png",
          status: "In Progress",
          board_id: 9,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Segunda tarefa",
          description: "Descrição 2",
          icon: "https://img.icons8.com/color/48/000000/muscle.png",
          status: "Completed",
          board_id: 9,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          id: crypto.randomUUID(),
          title: "Terceira tarefa",
          description: "Descrição 3",
          icon: "https://img.icons8.com/color/48/000000/idea.png",
          status: "Won't do",
          board_id: 9,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
      ],
    };

    saveBoard(newBoard)
    setBoard(newBoard)
    
  }, []);

  const addTask = (taskData: CreateTaskData) => {
    if(!board) return;

    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      board_id: 9,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const updatedBoard: Board = {
    ...board,
    tasks: [...board.tasks, newTask],
  };

    setBoard(updatedBoard)
    saveBoard(updatedBoard)
  }
  
  

  const value = {
    board,
    addTask,
    createBoardIfNotExists,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
