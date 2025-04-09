import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cuestionario from './pages/Cuestionario';
import Campanas from './pages/Campanas';
import Procedimientos from './pages/Procedimientos';
import Videos from './pages/Videos';
import Noticias from './pages/Noticias';
import IPERGame from './pages/IPERGame';
import './App.css';

function App() {
  return (
    <Router basename="/fepasa-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
        <Route path="/campanas" element={<Campanas />} />
        <Route path="/procedimientos" element={<Procedimientos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/iper-game" element={<IPERGame />} />
      </Routes>
    </Router>
  );
}

export default App; 