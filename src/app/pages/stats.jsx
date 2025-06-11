import { useState } from "react";

const allStats = [
  {
    id: 1,
    playerName: "Ali Maaloul",
    playerImage: "/players/Ali-Maaloul.jpg",
    appearances: 28,
    goals: 5,
    assists: 7,
    minutesPlayed: 2450,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 2,
    playerName: "hannibal mejbri",
    playerImage: "/players/hannibal-mejbri.jpg",
    appearances: 25,
    goals: 8,
    assists: 10,
    minutesPlayed: 2230,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 3,
    playerName: "Fakhreddine Ben Youssef",
    playerImage: "/players/fakhr-benyoussef.jpg",
    appearances: 30,
    goals: 12,
    assists: 5,
    minutesPlayed: 2700,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 4,
    playerName: "Taha Yassine Khenissi",
    playerImage: "/players/khenissi.webp",
    appearances: 27,
    goals: 10,
    assists: 6,
    minutesPlayed: 2580,
    yellowCards: 5,
    redCards: 0,
  },
  {
    id: 5,
    playerName: "Seifeddine Jaziri",
    playerImage: "/players/jaziri.webp",
    appearances: 29,
    goals: 4,
    assists: 3,
    minutesPlayed: 2320,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 6,
    playerName: "Mohamed Ali Ben Romdhane",
    playerImage: "/players/ben-romdhane.jpg",
    appearances: 31,
    goals: 6,
    assists: 4,
    minutesPlayed: 2680,
    yellowCards: 4,
    redCards: 0,
  },
  {
    id: 7,
    playerName: "Bassem Srarfi",
    playerImage: "/players/bassem-srarfi.jpg",
    appearances: 24,
    goals: 2,
    assists: 5,
    minutesPlayed: 2100,
    yellowCards: 1,
    redCards: 0,
  },
  {
    id: 8,
    playerName: "Anis Ben Slimane",
    playerImage: "/players/ben-solimane.jpg",
    appearances: 23,
    goals: 1,
    assists: 2,
    minutesPlayed: 1980,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 9,
    playerName: "Wahbi Khazri",
    playerImage: "/players/wahbi_khazri.jpg",
    appearances: 26,
    goals: 9,
    assists: 3,
    minutesPlayed: 2390,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 10,
    playerName: "Naim Sliti",
    playerImage: "/players/naim-sliti.jpg",
    appearances: 28,
    goals: 7,
    assists: 6,
    minutesPlayed: 2500,
    yellowCards: 2,
    redCards: 0,
  },
];

export default function Stats() {
  const [sortField, setSortField] = useState("appearances");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "desc" ? "asc" : "desc";
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1);
  };

  const sortedStats = [...allStats].sort((a, b) => {
    if (sortOrder === "asc") return a[sortField] - b[sortField];
    return b[sortField] - a[sortField];
  });

  const start = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedStats.slice(start, start + rowsPerPage);

  const renderSortIcon = (field) => {
    if (sortField !== field) return "⇅";
    return sortOrder === "asc" ? "↑" : "↓";
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-6">
        Player Stats - Season 2024/25
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-200">
          <thead className="bg-gray-800">
            <tr>
              <th className="p-4 text-left">Player</th>
              {[
                { label: "Apps", key: "appearances" },
                { label: "Goals", key: "goals" },
                { label: "Assists", key: "assists" },
                { label: "Minutes", key: "minutesPlayed" },
                { label: "Yellow", key: "yellowCards" },
                { label: "Red", key: "redCards" },
              ].map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="p-4 cursor-pointer text-center hover:text-green-400 transition"
                >
                  {col.label} {renderSortIcon(col.key)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((player, idx) => (
              <tr
                key={player.id}
                className={`border-b border-gray-700 ${
                  idx % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                } hover:bg-gray-700`}
              >
                <td className="flex items-center p-4 space-x-4">
                  <img
                    src={player.playerImage}
                    alt={player.playerName}
                    className="w-10 h-10 rounded-full border-2 border-green-400"
                  />
                  <span className="font-semibold text-white">
                    {player.playerName}
                  </span>
                </td>
                <td className="text-center">{player.appearances}</td>
                <td className="text-center">{player.goals}</td>
                <td className="text-center">{player.assists}</td>
                <td className="text-center">{player.minutesPlayed}</td>
                <td className="text-center">{player.yellowCards}</td>
                <td className="text-center">{player.redCards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((p) =>
              p * rowsPerPage < allStats.length ? p + 1 : p
            )
          }
          disabled={currentPage * rowsPerPage >= allStats.length}
          className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
