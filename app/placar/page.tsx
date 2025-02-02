"use client";

import { useState, useEffect } from "react";

export default function Placar() {
  const [playerOneName, setPlayerOneName] = useState("Jogador 1");
  const [playerTwoName, setPlayerTwoName] = useState("Jogador 2");
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);


  useEffect(() => {
    if (scoreOne === 21) {
      alert(`${playerOneName} venceu!`);
      resetGame();
    } else if (scoreTwo === 21) {
      alert(`${playerTwoName} venceu!`);
      resetGame();
    }
  }, [scoreOne, scoreTwo]);

  const resetGame = () => {
    setScoreOne(0);
    setScoreTwo(0);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Placar (21 game)</h1>

      
      <div className="flex gap-4">
        <input
          className="border p-2 rounded text-center"
          value={playerOneName}
          onChange={(e) => setPlayerOneName(e.target.value)}
        />
        <input
          className="border p-2 rounded text-center"
          value={playerTwoName}
          onChange={(e) => setPlayerTwoName(e.target.value)}
        />
      </div>

    
      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">{playerOneName}</h2>
          <p className="text-3xl">{scoreOne}</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setScoreOne((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setScoreOne((prev) => Math.min(21, prev + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">{playerTwoName}</h2>
          <p className="text-3xl">{scoreTwo}</p>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setScoreTwo((prev) => Math.max(0, prev - 1))}
            >
              -
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setScoreTwo((prev) => Math.min(21, prev + 1))}
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
