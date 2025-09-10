// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Classificacao from "./pages/classificacao";
import Jogadoras from "./pages/Jogadoras";
import Estatisticas from "./pages/estatisticas";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        {/* Header */}
        <header className="bg-purple-800 text-white flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">PASSA A BOLA</h1>
          <nav className="space-x-6 font-semibold">
            <Link to="/" className="hover:text-green-400">Home</Link>
            <Link to="/jogos" className="hover:text-green-400">Jogos</Link>
            <Link to="/classificacao" className="hover:text-green-400">Classificação</Link>
            <Link to="/jogadoras" className="hover:text-green-400">Jogadoras</Link>
            <Link to="/estatisticas" className="hover:text-green-400">Estatísticas</Link>
          </nav>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/classificacao" element={<Classificacao />} />
            <Route path="/jogadoras" element={<Jogadoras />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white text-center p-4">
          <p>© 2025 Passa a Bola - Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
