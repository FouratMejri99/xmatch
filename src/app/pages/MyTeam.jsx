"use client";

import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

import {
  formations,
  leaguePlayersData,
  playersData,
  substitutesData,
} from "../components/data";
import PlayerCard from "../components/playercard";

export default function MyTeam() {
  const [formation, setFormation] = useState("4-3-3");
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <Box
      sx={{
        px: 2,
        pb: 6,
        background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)", // dark fantasy feel
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Align pitch and league players vertically centered
          gap: 6,
          mt: 4,
          maxWidth: "1400px",
          mx: "auto",
          flexWrap: "nowrap", // no wrapping, keep them side by side
          width: "100%",
        }}
      >
        {/* LEFT: Tactics + Pitch + Subs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            flexShrink: 0,
          }}
        >
          {/* Scoreboard */}
          <Box
            sx={{
              mb: 2,
              px: 3,
              py: 2,
              borderRadius: 3,
              bgcolor: "rgba(0, 0, 0, 0.6)",
              border: "2px solid #00e676",
              textAlign: "center",
              width: "100%",
              maxWidth: 320,
              boxShadow: "0 0 25px #00e67680",
              backdropFilter: "blur(6px)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#ffffff", fontWeight: 700, mb: 1 }}
            >
              Weekly Performance
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#00e676",
                fontWeight: 900,
                lineHeight: 1.2,
              }}
            >
              72 pts
            </Typography>
            <Typography variant="caption" sx={{ color: "white", mb: 2 }}>
              Week 5 | Rank #12
            </Typography>

            <Divider sx={{ my: 1, bgcolor: "rgba(255,255,255,0.2)" }} />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Team Value
              </Typography>
              <Typography variant="body2" sx={{ color: "#00e676" }}>
                €99.5M
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Best Week
              </Typography>
              <Typography variant="body2" sx={{ color: "#00e676" }}>
                88 pts
              </Typography>
            </Box>
          </Box>

          {/* Pitch */}
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
                  }}
                  onClick={() => setSelectedPlayer(player)}
                >
                  <PlayerCard player={player} />
                </Box>
              );
            })}
          </Box>

          {/* Substitutes */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
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
                onClick={() => setSelectedPlayer(sub)}
              >
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
        </Box>

        {/* RIGHT: League players */}
        <Box
          sx={{
            width: 320,
            height: "950px",
            overflowY: "auto",
            bgcolor: "rgba(255,255,255,0.1)",
            borderRadius: 2,
            p: 3,
            border: "2px solid white",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            mt: 14, // <-- add this margin top to push it down
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "white", textAlign: "center", fontWeight: 600 }}
          >
            🌍 League Players
          </Typography>

          <List dense sx={{ color: "white", width: "100%" }}>
            {leaguePlayersData.slice(0, 16).map((player, index) => (
              <ListItem
                button
                key={index}
                onClick={() => setSelectedPlayer(player)}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
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

      {/* Selected Player Card */}
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
