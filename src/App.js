import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContext } from "./context/SearchContext";
import { SocketContext, socket } from "./context/SocketContext";

// Import Pages
import Search from "./pages/Search";
import Akinator from "./pages/Akinator";
import Admin from "./pages/Admin";

function App() {
  const [input, setInput] = useState("");
  const value = useMemo(() => ({ input, setInput }), [input]);

  return (
    <SearchContext.Provider value={value}>
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/akinator" element={<Akinator />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </SocketContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
