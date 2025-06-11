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
    name: "Phil Foden",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 85,
  },
  {
    name: "Jadon Sancho",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 83,
  },
  {
    name: "Wilfried Zaha",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 81,
  },
  {
    name: "Youri Tielemans",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 82,
  },
  {
    name: "James Tarkowski",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 79,
  },
  {
    name: "Nick Pope",
    position: "Goalkeeper",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 80,
  },
  {
    name: "Eduardo Camavinga",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 81,
  },
  {
    name: "João Félix",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 84,
  },
  {
    name: "Pau Torres",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p58621.png",
    rating: 82,
  },
];

export const leaguePlayersData = [
  {
    name: "Kylian Mbappé",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Jude Bellingham",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Rúben Dias",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Vinícius Júnior",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Joshua Kimmich",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Pedri",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Jan Oblak",
    position: "Goalkeeper",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Luka Modrić",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Karim Benzema",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Achraf Hakimi",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Jan Oblak",
    position: "Goalkeeper",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Luka Modrić",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Karim Benzema",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Achraf Hakimi",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Jan Oblak",
    position: "Goalkeeper",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Luka Modrić",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Karim Benzema",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Achraf Hakimi",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Jan Oblak",
    position: "Goalkeeper",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Luka Modrić",
    position: "Midfielder",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Karim Benzema",
    position: "Forward",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
  {
    name: "Achraf Hakimi",
    position: "Defender",
    image:
      "https://resources.premierleague.com/premierleague/photos/players/250x250/p121160.png",
  },
];

export const newsFeed = [
  {
    title: "Upcoming Friendly Matches Announced",
    date: "June 1, 2025",
    excerpt:
      "Tunisia will face off against Morocco and Algeria in the upcoming friendly matches set for July.",
    link: "/news/friendly-matches",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Youth Academy Report",
    date: "May 29, 2025",
    excerpt:
      "A look into the promising talents graduating from Tunisia’s youth academy this year.",
    link: "/news/youth-academy",
    background:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "New Stadium Renovation Plans",
    date: "May 25, 2025",
    excerpt:
      "The national stadium is set to undergo renovations to increase capacity and fan experience.",
    link: "/news/stadium-renovation",
    background:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80",
  },
];
