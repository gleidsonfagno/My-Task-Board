import React from "react";
import "./index.css";
import Home from "./pages/Home";
import AppContextProvider from "./context/AppContextProvider";

function App() {

  return (
    <React.StrictMode>
      <AppContextProvider>
      <Home />
      </AppContextProvider>
    </React.StrictMode>
  );
}

export default App;
