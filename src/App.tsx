import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Items, Pokemon, Pokemons } from './pages';

import Musica from "./assets/cancion.mp3";



function App() {
  return (
    <Router>
      <div className="app">
      <audio autoPlay loop>
          <source src={Musica}/>
      </audio>
        <Routes>
          <Route path="/" element={<Pokemons/>}/>
          <Route path="/items" element={<Items/>}/>
          <Route path="/pokemons" element={<Pokemons/>}/>
          <Route path="/pokemons/:name" element={<Pokemon/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
