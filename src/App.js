import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "animate.css"
import './App.css';
import Header from "./Hotels/Header";
import Footer from "./Hotels/Footer";
import Routing from "./Hotels/Routing";
import { createContext, useEffect, useState } from "react";
import { RoomCartProvider } from "./Hotels/RoomCartContext";
export const loginStatus = createContext()

function App() {
  const [token,setToken] = useState(localStorage.getItem("token") || "")

  useEffect(() => {
    localStorage.setItem("token", token)
  })
  
  return (
    <div className="App container-fluid p-0">
      <loginStatus.Provider value={[token,setToken]}>
        <RoomCartProvider>
      <Header />
      <Routing />
      <Footer />
      </RoomCartProvider>
      </loginStatus.Provider>
      
      {/* <MemoEx/> */}
    </div>
  );
}

export default App;
