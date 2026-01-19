import { createContext, useEffect, useState } from "react";
import { data, type TaskData } from "../assets/tasks";

interface AppContextType {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  tasks: TaskData[];
  setTasks: React.Dispatch<React.SetStateAction<TaskData[]>>;
  loading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBoard = async () => {
      await new Promise(resolve => setTimeout(resolve, 500))
      setTasks(data);
      setLoading(false);
    };
    fetchBoard();
  }, []);

  const value = {
    showModal,
    setShowModal,
    tasks,
    setTasks,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
