// src/pages/Jogadoras.jsx
function Jogadoras() {
  // Exemplo de dados (pode vir de API depois)
  const jogadoras = [
    { nome: "Maria", pos: "Atacante", time: "Time 1", jogos: 5, gols: 3, assist: 2, amarelo: 1, vermelho: 0 },
    { nome: "Ana", pos: "Goleira", time: "Time 2", jogos: 5, gols: 0, assist: 0, amarelo: 0, vermelho: 0 },
    { nome: "Carla", pos: "Meio-campo", time: "Time 3", jogos: 5, gols: 1, assist: 4, amarelo: 2, vermelho: 0 },
    { nome: "Julia", pos: "Zagueira", time: "Time 4", jogos: 5, gols: 0, assist: 1, amarelo: 0, vermelho: 1 },
  ];

  return (
    <section>
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-green-600 mb-6">JOGADORAS</h2>

      {/* Caixa roxa */}
      <div className="bg-purple-800 text-white rounded-xl shadow-lg p-6">
        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <select className="bg-purple-600 px-3 py-2 rounded-lg">
            <option>Split 1</option>
            <option>Split 2</option>
          </select>

          <select className="bg-purple-600 px-3 py-2 rounded-lg">
            <option>Todos os Times</option>
            <option>Time 1</option>
            <option>Time 2</option>
          </select>

          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-purple-600 px-3 py-2 rounded-lg flex-1"
          />
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogadoras.map((j, index) => (
            <div
              key={index}
              className="bg-purple-700 rounded-lg p-4 shadow-lg hover:scale-105 transition"
            >
              {/* Avatar */}
              <div className="bg-purple-500 w-24 h-24 mx-auto rounded-lg mb-4 flex items-center justify-center text-4xl">
                👩
              </div>

              {/* Nome e time */}
              <h3 className="text-xl font-bold">{j.nome}</h3>
              <p className="text-sm text-gray-200">{j.pos}</p>
              <p className="mt-1 font-semibold">{j.time}</p>

              {/* Estatísticas */}
              <div className="grid grid-cols-5 gap-2 text-center text-sm mt-4">
                <div>
                  <p className="font-bold">{j.jogos}</p>
                  <p>Jogos</p>
                </div>
                <div>
                  <p className="font-bold">{j.gols}</p>
                  <p>Gols</p>
                </div>
                <div>
                  <p className="font-bold">{j.assist}</p>
                  <p>Assist.</p>
                </div>
                <div>
                  <p className="font-bold">{j.amarelo}</p>
                  <p>Amarelo</p>
                </div>
                <div>
                  <p className="font-bold">{j.vermelho}</p>
                  <p>Vermelho</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jogadoras;
