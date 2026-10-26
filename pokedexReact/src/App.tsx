import { Link, Routes, Route } from "react-router";
import Home from "./assets/pages/Home";
import PokemonDetails from "./assets/pages/PokemonDetails";
import Trainer from "./assets/pages/Trainer";
function App() {

  return (
    <div>
      <nav>
        <Link to={"/"}>Pokemon</Link> {" | "} <Link to={"/treinadores"}>Treinadores</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/treinadores"} element={<Trainer />}/>
        <Route path={"/pokemon/:id"} element={<PokemonDetails />}/>
      </Routes>
      
    </div>
  );
}

export default App;
