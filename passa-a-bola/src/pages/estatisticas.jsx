// src/pages/Estatisticas.jsx
import { useState } from "react";

function Estatisticas() {
  // Estado para categoria selecionada
  const [categoria, setCategoria] = useState("Gols");

  // Exemplo de MVP (pode vir da API depois)
  const mvp = {
    nome: "Maria",
    pos: "Atacante",
    time: "Time 1",
  };

  const categorias = ["Gols", "Assistências", "Defesas", "Dribles", "Cartões"];

  return (
    <section>
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-green-600 mb-6">ESTATÍSTICAS</h2>

      {/* Caixa roxa */}
      <div className="bg-purple-800 text-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6">
        {/* Menu lateral */}
        <div>
          <h3 className="text-xl font-bold mb-4">RESUMO</h3>
          <ul className="space-y-2">
            {categorias.map((cat, index) => (
              <li key={index}>
                <button
                  onClick={() => setCategoria(cat)}
                  className={`w-full flex justify-between items-center px-4 py-2 rounded-lg transition ${
                    categoria === cat
                      ? "bg-purple-600 font-bold"
                      : "bg-purple-700 hover:bg-purple-600"
                  }`}
                >
                  {cat} <span>→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* MVP */}
        <div className="flex flex-col items-center justify-center bg-purple-700 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">MVP</h3>
          <div className="bg-purple-500 w-32 h-32 rounded-lg mb-4 flex items-center justify-center text-5xl">
            👩
          </div>
          <h4 className="text-xl font-semibold">{mvp.nome}</h4>
          <p className="text-sm text-gray-200">{mvp.pos}</p>
          <p className="font-semibold mt-2">{mvp.time}</p>
        </div>
      </div>
    </section>
  );
}

export default Estatisticas;
