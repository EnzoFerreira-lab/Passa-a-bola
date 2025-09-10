// src/pages/Jogos.jsx
function Jogos() {
  const jogos = [
    { time1: "Time 1", time2: "Time 10", status: "Finalizado" },
    { time1: "Time 2", time2: "Time 9", status: "Finalizado" },
    { time1: "Time 3", time2: "Time 8", status: "Finalizado" },
  ];

  return (
    <section>
      <h2 className="text-4xl font-bold text-green-600 mb-6">JOGOS</h2>
      <div className="bg-purple-800 text-white rounded-lg shadow-lg p-6">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-purple-700">
              <th className="p-2">Data</th>
              <th className="p-2">Horário</th>
              <th className="p-2">Jogo</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jogos.map((jogo, index) => (
              <tr key={index} className="border-b border-purple-600">
                <td>00/00/00</td>
                <td>00:00</td>
                <td>{jogo.time1} X {jogo.time2}</td>
                <td>{jogo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Jogos;
