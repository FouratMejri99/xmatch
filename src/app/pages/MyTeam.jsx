"use client";

import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

import {
  formations,
  playersData as initialPlayersData,
  leaguePlayersData,
  substitutesData,
} from "../components/data";
import PlayerCard from "../components/playercard";

export default function MyTeam() {
  const [formation, setFormation] = useState("4-3-3");
  const [playersData, setPlayersData] = useState(initialPlayersData); // local copy to update
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerToReplace, setPlayerToReplace] = useState(null);

  // Replace player on field with a new player
  const replacePlayer = (newPlayer) => {
    if (!playerToReplace) {
      setSelectedPlayer(newPlayer);
      return;
    }

    setPlayersData((prevPlayers) =>
      prevPlayers.map((player) =>
        player === playerToReplace ? newPlayer : player
      )
    );

    setSelectedPlayer(newPlayer);
    setPlayerToReplace(null);
  };

  return (
    <Box sx={{ px: 2, pb: 6 }}>
      <FormControl fullWidth sx={{ maxWidth: 300, mx: "auto", mt: 3 }}>
        <InputLabel>Formation</InputLabel>
        <Select
          value={formation}
          label="Formation"
          onChange={(e) => setFormation(e.target.value)}
        >
          {Object.keys(formations).map((form) => (
            <MenuItem key={form} value={form}>
              {form}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Info bar for replacement */}
      <Box
        sx={{
          maxWidth: 700,
          mx: "auto",
          mt: 2,
          mb: 2,
          textAlign: "center",
          color: playerToReplace ? "yellow" : "white",
          fontWeight: "600",
        }}
      >
        {playerToReplace ? (
          <>
            Click a substitute or league player to replace{" "}
            <span style={{ color: "yellow" }}>{playerToReplace.name}</span>
          </>
        ) : (
          "Click a player on the field to select them for replacement."
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          mt: 4,
          maxWidth: "1100px",
          mx: "auto",
        }}
      >
        {/* Pitch and players on field */}
        <Box
          sx={{
            position: "relative",
            width: "700px",
            height: "950px",
            backgroundImage: `url("/playfield.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "6px solid white",
            borderRadius: "12px",
            boxShadow: "0 0 30px rgba(0,0,0,0.3)",
          }}
        >
          {playersData.map((player, index) => {
            const pos = formations[formation][player.position];
            if (!pos) return null;

            return (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  top: pos.top,
                  left: pos.left,
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  width: 90,
                  cursor: "pointer",
                  border:
                    player === playerToReplace ? "3px solid yellow" : "none",
                  borderRadius: 2,
                  transition: "border 0.3s",
                }}
                onClick={() => {
                  if (playerToReplace === player) {
                    // Deselect if clicking the same player
                    setPlayerToReplace(null);
                  } else {
                    setPlayerToReplace(player);
                  }
                }}
              >
                <PlayerCard player={player} />
              </Box>
            );
          })}
        </Box>

        {/* League players list */}
        <Box
          sx={{
            width: 320,
            maxHeight: 950,
            overflowY: "auto",
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            p: 2,
            border: "2px solid white",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "white", textAlign: "center" }}
          >
            League Players
          </Typography>

          <List dense sx={{ color: "white" }}>
            {leaguePlayersData.slice(0, 10).map((player, index) => (
              <ListItem
                button
                key={index}
                onClick={() => replacePlayer(player)}
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={player.name}
                    src={player.image}
                    sx={{ width: 40, height: 40 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={player.name}
                  secondary={player.position}
                  primaryTypographyProps={{ fontWeight: "600" }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Substitutes row */}
      <Box
        sx={{
          maxWidth: "700px",
          mx: "auto",
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          px: 1,
        }}
      >
        {substitutesData.slice(0, 6).map((sub, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
              width: 80,
            }}
            onClick={() => replacePlayer(sub)}
          >
            {/* Circular player image */}
            <Box
              component="img"
              src={sub.image}
              alt={sub.name}
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: "2px solid white",
                objectFit: "cover",
                boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                mb: 1,
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: "white",
                fontWeight: "600",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              {sub.name}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Popup card */}
      {selectedPlayer && (
        <PlayerCard
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
          isPopup
        />
      )}
    </Box>
  );
}
