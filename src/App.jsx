import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Play from "./pages/play/Play";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<List />} />
        <Route path="/play/:id" element={<Play />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
