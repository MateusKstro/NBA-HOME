
const players = [
  { rank: 1, name: "Shai Gilgeous-Alexander", team: "OKC" },
  { rank: 2, name: "Giannis Antetokounmpo", team: "MIL" },
  { rank: 3, name: "Nikola Jokic", team: "DEN" },
  { rank: 4, name: "Tyrese Maxey", team: "PHI" },
  { rank: 5, name: "Kevin Durant", team: "PHX" },
  { rank: 6, name: "Jayson Tatum", team: "BOS" },
  { rank: 7, name: "Anthony Edwards", team: "MIN" },
  { rank: 8, name: "Devin Booker", team: "PHX" },
  { rank: 9, name: "Anthony Davis", team: "LAL" },
  { rank: 10, name: "Jalen Brunson", team: "NY" },
];

export default function Top10() {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">🏀 Top 10 (atual) Jogadores 🏀</h1>
      <ul className="w-full max-w-md border rounded-lg shadow-md bg-white">
        {players.map((player) => (
          <li key={player.rank} className="flex justify-between p-3 border-b last:border-0">
            <span className="font-semibold">{player.rank}. {player.name}</span>
            <span className="text-gray-600">{player.team}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
