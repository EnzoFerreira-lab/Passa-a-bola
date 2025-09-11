// src/pages/Classificacao.jsx
function Classificacao() {
  // Exemplo de dados (depois você pode trocar por API)
  const classificacao = [
    { pos: 1, time: "Time 1", pts: 9, pj: 3, v: 3, e: 0, d: 0, gp: 10, gc: 2, sg: 8 },
    { pos: 2, time: "Time 2", pts: 6, pj: 3, v: 2, e: 0, d: 1, gp: 7, gc: 4, sg: 3 },
    { pos: 3, time: "Time 3", pts: 3, pj: 3, v: 1, e: 0, d: 2, gp: 4, gc: 6, sg: -2 },
    { pos: 4, time: "Time 4", pts: 0, pj: 3, v: 0, e: 0, d: 3, gp: 1, gc: 10, sg: -9 },
  ];

  return (
    <section>
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-green-600 mb-6">CLASSIFICAÇÃO</h2>

      {/* Caixa roxa */}
      <div className="bg-purple-800 text-white rounded-xl shadow-lg p-6 overflow-x-auto">
        <h3 className="bg-purple-600 px-4 py-2 rounded-full w-max mb-4 font-semibold">
          Split 1
        </h3>

        {/* Tabela */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-purple-700">
              <th className="p-3">POSIÇÃO</th>
              <th className="p-3">TIME</th>
              <th className="p-3">PTS</th>
              <th className="p-3">PJ</th>
              <th className="p-3">V</th>
              <th className="p-3">E</th>
              <th className="p-3">D</th>
              <th className="p-3">GP</th>
              <th className="p-3">GC</th>
              <th className="p-3">SG</th>
            </tr>
          </thead>
          <tbody>
            {classificacao.map((item, index) => (
              <tr
                key={index}
                className="border-b border-purple-600 hover:bg-purple-700 transition"
              >
                <td className="p-3 font-bold">{item.pos}</td>
                <td className="p-3 flex items-center justify-center gap-2">
                  <img
                    src="/src/assets/logo.png" // substitua pelo logo real
                    alt="logo time"
                    className="w-6 h-6"
                  />
                  {item.time}
                </td>
                <td className="p-3">{item.pts}</td>
                <td className="p-3">{item.pj}</td>
                <td className="p-3">{item.v}</td>
                <td className="p-3">{item.e}</td>
                <td className="p-3">{item.d}</td>
                <td className="p-3">{item.gp}</td>
                <td className="p-3">{item.gc}</td>
                <td className="p-3">{item.sg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Classificacao;
