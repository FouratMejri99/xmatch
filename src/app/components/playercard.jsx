"use client";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

export default function PlayerCard({
  player,
  onClose,
  isPopup,
  selected,
  onClick,
}) {
  if (!player) return null;

  const stats = [
    { label: "PAC", value: player.pace ?? 85 },
    { label: "SHO", value: player.shooting ?? 88 },
    { label: "PAS", value: player.passing ?? 82 },
    { label: "DRI", value: player.dribbling ?? 90 },
    { label: "DEF", value: player.defense ?? 40 },
    { label: "PHY", value: player.physical ?? 75 },
  ];

  // Popup card style
  if (isPopup) {
    return (
      <Box
        onClick={onClose}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1300,
          p: 2,
        }}
      >
        <Card
          onClick={(e) => e.stopPropagation()}
          sx={{
            position: "relative",
            width: 350,
            bgcolor: "linear-gradient(135deg, #0e4a92 0%, #103b66 100%)",
            borderRadius: 4,
            boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
            color: "white",
            p: 3,
            textAlign: "center",
            fontFamily: "'Oswald', sans-serif",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 12, right: 12, color: "white" }}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>

          {/* Player Rating */}
          <Box
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              fontSize: 48,
              fontWeight: "bold",
              color: "#ffd700",
              textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
              userSelect: "none",
            }}
          >
            {player.rating ?? "88"}
          </Box>

          {/* Position Badge */}
          <Box
            sx={{
              position: "absolute",
              top: 20,
              right: 16,
              bgcolor: "#1a73e8",
              px: 2,
              py: 0.5,
              borderRadius: 1,
              fontWeight: "bold",
              fontSize: 16,
              letterSpacing: 1,
              userSelect: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
            }}
          >
            {player.position.toUpperCase()}
          </Box>

          {/* Player Image */}
          <CardMedia
            component="img"
            image={player.image}
            alt={player.name}
            sx={{
              width: 160,
              height: 160,
              objectFit: "cover",
              borderRadius: "50%",
              border: "4px solid #ffd700",
              boxShadow: "0 0 20px #ffd700",
              margin: "auto",
              mb: 2,
              mt: 4,
            }}
          />

          {/* Player Name */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "900",
              letterSpacing: 2,
              mb: 2,
              textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
            }}
          >
            {player.name.toUpperCase()}
          </Typography>

          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)", mb: 2 }} />

          {/* Stats Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 1.5,
              fontWeight: "bold",
              fontSize: 16,
              userSelect: "none",
            }}
          >
            {stats.map(({ label, value }) => (
              <Box
                key={label}
                sx={{
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: 1,
                  py: 1,
                  px: 0,
                  color: "#ffd700",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
                }}
              >
                <Typography>{label}</Typography>
                <Typography sx={{ fontSize: 22, mt: 0.3 }}>{value}</Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    );
  }

  // Inline small card style (on pitch)
  return (
    <Card
      onClick={onClick}
      sx={{
        width: 100,
        bgcolor: selected ? "rgba(255, 215, 0, 0.3)" : "#103b66",
        borderRadius: 2,
        boxShadow: selected
          ? "0 0 8px 3px rgba(255, 215, 0, 0.7)"
          : "0 3px 10px rgba(0,0,0,0.6)",
        color: "white",
        textAlign: "center",
        p: 0.5,
        fontFamily: "'Oswald', sans-serif",
        cursor: "pointer",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          fontWeight: "900",
          fontSize: 24,
          color: "#ffd700",
          mb: 0.5,
          lineHeight: 1,
        }}
      >
        {player.rating ?? "88"}
      </Box>
      <CardMedia
        component="img"
        image={player.image}
        alt={player.name}
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          border: selected ? "3px solid #ffd700" : "2px solid white",
          margin: "auto",
          mb: 0.5,
          objectFit: "cover",
          boxShadow: selected ? "0 0 10px #ffd700" : "none",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
        }}
      />
      <Typography sx={{ fontWeight: "700", fontSize: 12, letterSpacing: 1 }}>
        {player.name.toUpperCase()}
      </Typography>
      <Typography sx={{ fontSize: 10, color: "rgba(255, 255, 255, 0.7)" }}>
        {player.position.toUpperCase()}
      </Typography>
    </Card>
  );
}
