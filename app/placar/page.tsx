"use client";

import { useState, useEffect } from "react";

export default function Placar() {
  const [jogadorUm, setJogadorUm] = useState("Jogador 1");
  const [jogadorDois, setJogadorDois] = useState("Jogador 2");
  const [pontosUm, setPontosUm] = useState(0);
  const [pontosDois, setPontosDois] = useState(0);


  useEffect(() => {
    if (pontosUm === 21) {
      alert(`${jogadorUm} venceu!`);
      resetGame();
    } else if (pontosDois === 21) {
      alert(`${jogadorDois} venceu!`);
      resetGame();
    }
  }, [pontosUm, pontosDois]);

  const resetGame = () => {
    setPontosUm(0);
    setPontosDois(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Placar (21 game)</h1>


      <div className="flex gap-4">
        <input
          className="border p-2 rounded text-center"
          value={jogadorUm}
          onChange={(e) => setJogadorUm(e.target.value)}
        />
        <input
          className="border p-2 rounded text-center"
          value={jogadorDois}
          onChange={(e) => setJogadorDois(e.target.value)}
        />
      </div>


      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">{jogadorUm}</h2>
          <p className="text-3xl">{pontosUm}</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setPontosUm((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setPontosUm((prev) => Math.min(21, prev + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">{jogadorDois}</h2>
          <p className="text-3xl">{pontosDois}</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setPontosDois((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setPontosDois((prev) => Math.min(21, prev + 1))}
            >
              +
            </button>
          </div>
        </div>
      </div>


      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={resetGame}
      >
        Resetar Placar
      </button>
    </div>
  );
}
