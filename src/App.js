import { BrowserRouter, Routes, Route } from "react-router-dom";

import Axios from "./Component/axios";
import Link from "./Component/link";
import Recipe from "./Component/recipe";
import "./Component/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/axios" element={<Axios />} />
        <Route path="/link" element={<Link />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
