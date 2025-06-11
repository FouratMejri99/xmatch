"use client";

import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
import { newsFeed } from "../components/data";
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export default function HomeContent() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: 2, sm: 4 }, mb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: 200, sm: 260 },
          backgroundImage:
            'url("https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3,
          mb: 6,
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          },
        }}
      >
        <Typography
          variant={isSmUp ? "h2" : "h4"}
          component={motion.h1}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          sx={{ position: "relative", zIndex: 2, fontWeight: "bold" }}
        >
          Welcome to FootTunisia
        </Typography>
        <Typography
          variant={isSmUp ? "h6" : "body1"}
          component={motion.p}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          sx={{ position: "relative", zIndex: 2, mt: 1, maxWidth: 650 }}
        >
          Your ultimate football platform to stay updated, manage your team, and
          follow the league action.
        </Typography>
      </Box>

      <Stack spacing={5}>
        {/* 🔥 Trending Now (Moved Up) */}
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            🔥 Trending Now
          </Typography>

          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              position: "relative",
              py: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                width: "max-content",
                animation: `${scroll} 20s linear infinite`,
                // Removed "& > div" here because we move styles to each item
              }}
            >
              {[...newsFeed, ...newsFeed].map((item, index) => (
                <Box
                  key={index}
                  onClick={() => (window.location.href = item.link)}
                  sx={{
                    minWidth: 220,
                    height: 180, // Added explicit height
                    flexShrink: 0,
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    color: "#fff",
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.7) 100%), url(${item.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: 1.5,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    transition: "box-shadow 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                      animationPlayState: "paused",
                    },
                  }}
                >
                  <Box
                    sx={{
                      alignSelf: "flex-start",
                      bgcolor: "primary.main",
                      px: 1,
                      py: 0.3,
                      borderRadius: 1.5,
                      mb: 0.75,
                      fontWeight: "bold",
                      fontSize: 10,
                      textTransform: "uppercase",
                      boxShadow: "0 1px 5px rgba(0,0,0,0.15)",
                      userSelect: "none",
                      display: "inline-block",
                    }}
                  >
                    🔥 Trending
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    gutterBottom
                    noWrap
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7, mb: 0.5 }}>
                    {item.date}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 1.2,
                      maxHeight: 45,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.excerpt.length > 70
                      ? item.excerpt.slice(0, 70) + "…"
                      : item.excerpt}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        {/* Video Card */}
        <Card
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <CardContent>
            <Box
              sx={{
                position: "relative",
                paddingTop: "56.25%",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/2sznNQqqVMs"
                title="YouTube video"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Box>
          </CardContent>
        </Card>

        {/* Quick Insights */}
        {/* Check Our Product */}
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            ⚙️ Check Our Product
          </Typography>

          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 4,
              p: 4,
              borderRadius: 4,
              boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              background: "linear-gradient(135deg, #f0f4ff 0%, #d9e8ff 100%)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Box
              component="img"
              src="/aipredictor.jpg"
              alt="AI Football Analysis"
              sx={{
                width: { xs: "100%", sm: 320 },
                borderRadius: 3,
                objectFit: "cover",
                boxShadow: "0 8px 15px rgba(0,0,0,0.15)",
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                GamePredict AI – Your Smart Football Assistant
              </Typography>

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Discover our cutting-edge AI tool that analyzes football matches
                and delivers accurate predictions based on real-time data,
                tactics, and player performance. From team strategy breakdowns
                to win probabilities — we've got it all.
              </Typography>

              {/* Sample Predictions */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  Upcoming Match Predictions
                </Typography>

                {[
                  {
                    match: "Tunisia 🇹🇳 vs Morocco 🇲🇦",
                    date: "June 15, 2025",
                    prediction: "Tunisia to Win",
                    probability: 0.62,
                    keyStats: "70% possession, 15 shots",
                  },
                  {
                    match: "Algeria 🇩🇿 vs Egypt 🇪🇬",
                    date: "June 18, 2025",
                    prediction: "Draw",
                    probability: 0.34,
                    keyStats: "Balanced defense, 10 shots each",
                  },
                  {
                    match: "Senegal 🇸🇳 vs Nigeria 🇳🇬",
                    date: "June 20, 2025",
                    prediction: "Senegal to Win",
                    probability: 0.58,
                    keyStats: "Aggressive offense, 12 shots",
                  },
                ].map(
                  (
                    { match, date, prediction, probability, keyStats },
                    i,
                    arr
                  ) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        p: 2,
                        borderRadius: 3,
                        bgcolor: "rgba(255, 255, 255, 0.85)",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                        mb: i === arr.length - 1 ? 0 : 2,
                        borderLeft: `6px solid ${
                          probability > 0.5
                            ? "#4caf50"
                            : prediction.toLowerCase() === "draw"
                            ? "#ff9800"
                            : "#f44336"
                        }`,
                        transition: "background-color 0.3s ease",
                        "&:hover": {
                          bgcolor: "rgba(255, 255, 255, 1)",
                        },
                      }}
                    >
                      <Box>
                        <Typography fontWeight="600" fontSize={16}>
                          {match}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={500}
                        >
                          {date}
                        </Typography>
                      </Box>

                      <Box sx={{ textAlign: "right", minWidth: 140 }}>
                        <Typography
                          fontWeight="bold"
                          sx={{
                            color:
                              probability > 0.5
                                ? "success.main"
                                : prediction.toLowerCase() === "draw"
                                ? "warning.main"
                                : "error.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            gap: 1,
                            fontSize: 16,
                          }}
                        >
                          {prediction}{" "}
                          {probability > 0.5
                            ? "✅"
                            : prediction.toLowerCase() === "draw"
                            ? "⚖️"
                            : "❌"}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            animation: "fadeInProbability 1.5s ease forwards",
                            fontWeight: 500,
                          }}
                        >
                          Probability: {(probability * 100).toFixed(0)}%
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          display="block"
                          fontWeight={500}
                        >
                          {keyStats}
                        </Typography>
                      </Box>
                    </Box>
                  )
                )}
              </Box>

              <Typography
                component="a"
                href="/product"
                sx={{
                  mt: 3,
                  display: "inline-block",
                  textDecoration: "none",
                  color: "primary.main",
                  fontWeight: "bold",
                  fontSize: 16,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                👉 Explore the Product
              </Typography>
            </Box>
          </Card>

          <style>
            {`
      @keyframes fadeInProbability {
        0% {opacity: 0; transform: translateY(5px);}
        100% {opacity: 1; transform: translateY(0);}
      }
    `}
          </style>
        </Box>
      </Stack>
    </Box>
  );
}
