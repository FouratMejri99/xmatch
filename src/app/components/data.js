// data.js
export const playersData = [
  {
    name: "Ederson",
    position: "GK",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Robertson",
    position: "LB",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p122798.png",
  },
  {
    name: "Van Dijk",
    position: "CB1",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png",
  },
  {
    name: "Dias",
    position: "CB2",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p171314.png",
  },
  {
    name: "Walker",
    position: "RB",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
  },
  {
    name: "Rodri",
    position: "CDM",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p222199.png",
  },
  {
    name: "De Bruyne",
    position: "CM1",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png",
  },
  {
    name: "Bellingham",
    position: "CM2",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p448203.png",
  },
  {
    name: "Vinícius",
    position: "LW",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p231747.png",
  },
  {
    name: "Haaland",
    position: "ST",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
  },
  {
    name: "Salah",
    position: "RW",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png",
  },
];

export const formations = {
  "4-3-3": {
    GK: { top: "92%", left: "50%" },
    LB: { top: "75%", left: "15%" },
    CB1: { top: "75%", left: "35%" },
    CB2: { top: "75%", left: "65%" },
    RB: { top: "75%", left: "85%" },
    CDM: { top: "60%", left: "50%" },
    CM1: { top: "50%", left: "30%" },
    CM2: { top: "50%", left: "70%" },
    LW: { top: "30%", left: "15%" },
    ST: { top: "25%", left: "50%" },
    RW: { top: "30%", left: "85%" },
  },
  "4-4-2": {
    GK: { top: "92%", left: "50%" },
    LB: { top: "75%", left: "15%" },
    CB1: { top: "75%", left: "35%" },
    CB2: { top: "75%", left: "65%" },
    RB: { top: "75%", left: "85%" },
    CM1: { top: "55%", left: "35%" },
    CM2: { top: "55%", left: "65%" },
    LW: { top: "40%", left: "15%" },
    RW: { top: "40%", left: "85%" },
    ST: { top: "25%", left: "45%" },
    CDM: { top: "25%", left: "55%" }, // 2nd striker
  },
  "3-5-2": {
    GK: { top: "92%", left: "50%" },
    CB1: { top: "75%", left: "25%" },
    CB2: { top: "75%", left: "50%" },
    RB: { top: "75%", left: "75%" },
    CDM: { top: "60%", left: "50%" },
    CM1: { top: "50%", left: "30%" },
    CM2: { top: "50%", left: "70%" },
    LW: { top: "35%", left: "20%" },
    RW: { top: "35%", left: "80%" },
    ST: { top: "20%", left: "40%" },
    LB: { top: "20%", left: "60%" }, // 2nd striker
  },
};

export const substitutesData = [
  {
    name: "Sub Player 1",
    position: "Sub",
    image: "/subs/player1.jpg",
    rating: 80,
  },
  {
    name: "Sub Player 2",
    position: "Sub",
    image: "/subs/player2.jpg",
    rating: 78,
  },
  {
    name: "Sub Player 1",
    position: "Sub",
    image: "/subs/player1.jpg",
    rating: 80,
  },
  {
    name: "Sub Player 1",
    position: "Sub",
    image: "/subs/player1.jpg",
    rating: 80,
  },
  {
    name: "Sub Player 1",
    position: "Sub",
    image: "/subs/player1.jpg",
    rating: 80,
  },
  {
    name: "Sub Player 1",
    position: "Sub",
    image: "/subs/player1.jpg",
    rating: 80,
  },
];

export const leaguePlayersData = [
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
  {
    name: "Player Two",
    position: "Midfielder",
    image: "/league/player2.jpg",
  },
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
  {
    name: "Player One",
    position: "Forward",
    image: "/league/player1.jpg",
  },
];
