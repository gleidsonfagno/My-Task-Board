import {createContext, useState } from "react";

interface AppContextType {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext  = createContext<AppContextType>({
    showModal: false,
    setShowModal:() => {},
});

const AppContextProvider  = ({ children }: {children: React.ReactNode}) => {
  const [showModal, setShowModal] = useState(false);

  const value = {
    showModal,
    setShowModal
  }

  return <AppContext.Provider value={value}>{children} </AppContext.Provider>
}

export default AppContextProvider 
