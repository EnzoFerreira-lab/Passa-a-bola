// src/pages/Jogos.jsx
function Jogos() {
  // Exemplo de dados (depois você pode puxar de uma API)
  const jogos = [
    { data: "01/09/25", hora: "10:00", time1: "Time 1", time2: "Time 10", status: "Finalizado" },
    { data: "01/09/25", hora: "11:00", time1: "Time 2", time2: "Time 9", status: "Finalizado" },
    { data: "01/09/25", hora: "12:00", time1: "Time 3", time2: "Time 8", status: "Finalizado" },
    { data: "01/09/25", hora: "13:00", time1: "Time 4", time2: "Time 7", status: "Finalizado" },
    { data: "01/09/25", hora: "14:00", time1: "Time 5", time2: "Time 6", status: "Finalizado" },
  ];

  return (
    <section>
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-green-600 mb-6">JOGOS</h2>

      {/* Caixa roxa */}
      <div className="bg-purple-800 text-white rounded-xl shadow-lg p-6 overflow-x-auto">
        <h3 className="bg-purple-600 px-4 py-2 rounded-full w-max mb-4 font-semibold">
          Rodada 1
        </h3>

        {/* Tabela */}
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-purple-700">
              <th className="p-3">DATA</th>
              <th className="p-3">HORÁRIO</th>
              <th className="p-3">JOGO</th>
              <th className="p-3">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((jogo, index) => (
              <tr
                key={index}
                className="border-b border-purple-600 hover:bg-purple-700 transition"
              >
                <td className="p-3">{jogo.data}</td>
                <td className="p-3">{jogo.hora}</td>
                <td className="p-3 font-bold">
                  {jogo.time1} <span className="text-green-400">0 X 0</span> {jogo.time2}
                </td>
                <td className="p-3">{jogo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Jogos;
