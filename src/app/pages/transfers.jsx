const transfersData = [
  {
    id: 1,
    playerName: "Ali Maaloul",
    playerImage: "/players/ali-maaloul.jpg",
    currentTeam: {
      name: "Étoile Sportive du Sahel",
      logo: "/clubs/etoile-sportive-du-sahel.png",
    },
    price: "€1.2M",
    rumoredClubs: [
      { id: 1, name: "Club Africain", logo: "/clubs/club-africain.png" },
      { id: 2, name: "CS Sfaxien", logo: "/clubs/cs-sfaxien.png" },
    ],
  },
  {
    id: 2,
    playerName: "Yassine Chikhaoui",
    playerImage: "/players/yassine-chikhaoui.jpg",
    currentTeam: {
      name: "Étoile Sportive du Sahel",
      logo: "/clubs/etoile-sportive-du-sahel.png",
    },
    price: "€900K",
    rumoredClubs: [
      { id: 3, name: "US Monastir", logo: "/clubs/us-monastir.png" },
    ],
  },
  {
    id: 3,
    playerName: "Fakhreddine Ben Youssef",
    playerImage: "/players/fakhreddine-ben-youssef.jpg",
    currentTeam: {
      name: "CS Sfaxien",
      logo: "/clubs/cs-sfaxien.png",
    },
    price: "€800K",
    rumoredClubs: [],
  },
  {
    id: 4,
    playerName: "Taha Yassine Khenissi",
    playerImage: "/players/taha-khenissi.jpg",
    currentTeam: {
      name: "Espérance de Tunis",
      logo: "/clubs/esperance-de-tunis.png",
    },
    price: "€1.5M",
    rumoredClubs: [
      { id: 4, name: "Club Africain", logo: "/clubs/club-africain.png" },
    ],
  },
];

export default function Transfers() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
        Ligue 1 Tunisia Transfers
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left px-6 py-4 rounded-tl-lg">Player</th>
              <th className="text-left px-6 py-4">Current Team</th>
              <th className="text-left px-6 py-4">Price</th>
              <th className="text-left px-6 py-4 rounded-tr-lg">
                Rumored Clubs
              </th>
            </tr>
          </thead>

          <tbody>
            {transfersData.map(
              ({
                id,
                playerName,
                playerImage,
                currentTeam,
                price,
                rumoredClubs,
              }) => (
                <tr
                  key={id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900 transition"
                >
                  {/* Player */}
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <img
                      src={playerImage}
                      alt={playerName}
                      className="w-14 h-14 rounded-full object-cover border-2 border-green-600"
                    />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {playerName}
                    </span>
                  </td>

                  {/* Current Team */}
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <img
                      src={currentTeam.logo}
                      alt={currentTeam.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-600"
                    />
                    <span className="text-gray-800 dark:text-gray-300 font-medium">
                      {currentTeam.name}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-green-700 font-semibold">
                    {price}
                  </td>

                  {/* Rumored Clubs */}
                  <td className="px-6 py-4 flex space-x-3">
                    {rumoredClubs.length > 0 ? (
                      rumoredClubs.map(({ id: clubId, name, logo }) => (
                        <img
                          key={clubId}
                          src={logo}
                          alt={name}
                          title={name}
                          className="w-10 h-10 rounded-full border border-green-500 cursor-pointer hover:scale-110 transform transition"
                        />
                      ))
                    ) : (
                      <span className="text-gray-400 italic">No rumors</span>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
