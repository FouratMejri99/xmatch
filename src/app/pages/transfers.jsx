const transfersData = [
  {
    id: 1,
    playerName: "Ali Maaloul",
    playerImage: "/players/Ali-Maaloul.jpg",
    currentTeam: {
      name: "Étoile Sportive du Sahel",
      logo: "/clubs/ess.png",
    },
    price: "€1.2M",
    rumoredClubs: [
      { id: 1, name: "Club Africain", logo: "/clubs/ca.png" },
      { id: 2, name: "CS Sfaxien", logo: "/clubs/css.png" },
    ],
  },
  {
    id: 2,
    playerName: "Seiff Jaziri",
    playerImage: "/players/jaziri.webp",
    currentTeam: {
      name: "Étoile Sportive du Sahel",
      logo: "/clubs/ess.png",
    },
    price: "€900K",
    rumoredClubs: [{ id: 3, name: "US Monastir", logo: "/clubs/usm.png" }],
  },
  {
    id: 3,
    playerName: "Fakhreddine Ben Youssef",
    playerImage: "/players/fakhr-benyoussef.jpg",
    currentTeam: {
      name: "CS Sfaxien",
      logo: "/clubs/css.png",
    },
    price: "€800K",
    rumoredClubs: [],
  },
  {
    id: 4,
    playerName: "Taha Yassine Khenissi",
    playerImage: "/players/khenissi.webp",
    currentTeam: {
      name: "Espérance de Tunis",
      logo: "/clubs/est.png",
    },
    price: "€1.5M",
    rumoredClubs: [{ id: 4, name: "Club Africain", logo: "/clubs/ca.png" }],
  },
];

export default function Transfers() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
        Ligue 1 Tunisia Transfers
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="min-w-full bg-white dark:bg-gray-900 rounded-lg">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="text-left px-4 py-3 md:px-6 md:py-4 rounded-tl-lg">
                Player
              </th>
              <th className="text-left px-4 py-3 md:px-6 md:py-4">
                Current Team
              </th>
              <th className="text-left px-4 py-3 md:px-6 md:py-4">Price</th>
              <th className="text-left px-4 py-3 md:px-6 md:py-4 rounded-tr-lg">
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
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-green-900/30 transition"
                >
                  {/* Player */}
                  <td className="px-4 py-3 md:px-6 md:py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={playerImage}
                        alt={playerName}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-600"
                      />
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        {playerName}
                      </span>
                    </div>
                  </td>

                  {/* Current Team */}
                  <td className="px-4 py-3 md:px-6 md:py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={currentTeam.logo}
                        alt={currentTeam.name}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-green-600"
                      />
                      <span className="text-gray-800 dark:text-gray-300 font-medium">
                        {currentTeam.name}
                      </span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 md:px-6 md:py-4 text-green-700 dark:text-green-400 font-semibold">
                    {price}
                  </td>

                  {/* Rumored Clubs */}
                  <td className="px-4 py-3 md:px-6 md:py-4">
                    <div className="flex flex-wrap gap-2 items-center">
                      {rumoredClubs.length > 0 ? (
                        rumoredClubs.map(({ id: clubId, name, logo }) => (
                          <img
                            key={clubId}
                            src={logo}
                            alt={name}
                            title={name}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-green-500 cursor-pointer hover:scale-110 transform transition"
                          />
                        ))
                      ) : (
                        <span className="text-gray-400 italic text-sm">
                          No rumors
                        </span>
                      )}
                    </div>
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
