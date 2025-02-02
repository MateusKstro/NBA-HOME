

const timesLeste = [
  { rank: 1, nome: "Boston Celtics", vitoria: 35 },
  { rank: 2, nome: "Milwaukee Bucks", vitoria: 33 },
  { rank: 3, nome: "Philadelphia 76ers", vitoria: 31 },
  { rank: 4, nome: "Cleveland Cavaliers", vitoria: 29 },
  { rank: 5, nome: "Miami Heat", vitoria: 27 },
  { rank: 6, nome: "New York Knicks", vitoria: 26 },
  { rank: 7, nome: "Indiana Pacers", vitoria: 24 },
  { rank: 8, nome: "Atlanta Hawks", vitoria: 22 },
  { rank: 9, nome: "Toronto Raptors", vitoria: 20 },
  { rank: 10, nome: "Brooklyn Nets", vitoria: 18 },
];

const timesOeste = [
  { rank: 1, nome: "Denver Nuggets", vitoria: 37 },
  { rank: 2, nome: "Minnesota Timberwolves", vitoria: 34 },
  { rank: 3, nome: "Oklahoma City Thunder", vitoria: 32 },
  { rank: 4, nome: "LA Clippers", vitoria: 30 },
  { rank: 5, nome: "Phoenix Suns", vitoria: 28 },
  { rank: 6, nome: "Sacramento Kings", vitoria: 27 },
  { rank: 7, nome: "Dallas Mavericks", vitoria: 25 },
  { rank: 8, nome: "Golden State Warriors", vitoria: 23 },
  { rank: 9, nome: "Los Angeles Lakers", vitoria: 21 },
  { rank: 10, nome: "New Orleans Pelicans", vitoria: 19 },
];

export default function Temporada() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🏆 Classificação da Temporada 🏆</h1>
      
      <div className="flex flex-wrap justify-center gap-8">  
        <div className="w-80 border rounded-lg shadow-md bg-white p-4">
          <h2 className="text-xl font-semibold text-center mb-3"> Leste </h2>
          <ul>
            {timesLeste.map((time) => (
              <li
                key={time.rank}
                className="flex justify-between p-2 border-b last:border-0"
              >
                <span className="font-semibold">{time.rank}. {time.nome}</span>
                <span className="text-gray-600">{time.vitoria}</span>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="w-80 border rounded-lg shadow-md bg-white p-4">
          <h2 className="text-xl font-semibold text-center mb-3"> Oeste </h2>
          <ul>
            {timesOeste.map((time) => (
              <li
                key={time.rank}
                className="flex justify-between p-2 border-b last:border-0"
              >
                <span className="font-semibold">{time.rank}. {time.nome}</span>
                <span className="text-gray-600">{time.vitoria}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
