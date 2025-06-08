"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const featuredArticles = [
  {
    title: "Tunisia Advances to the Next Round!",
    image:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "A thrilling match ended with Tunisia securing a victory to advance in the tournament. Fans are ecstatic!",
    date: "June 5, 2025",
    link: "/news/tunisia-advances",
  },
  {
    title: "Top Scorer Spotlight: Ahmed's Journey",
    image:
      "https://images.unsplash.com/photo-1520975699011-502d1a49faeb?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover how Ahmed rose through the ranks to become the league's top scorer this season.",
    date: "June 3, 2025",
    link: "/news/ahmed-top-scorer",
  },
];

const newsFeed = [
  {
    title: "Upcoming Friendly Matches Announced",
    date: "June 1, 2025",
    excerpt:
      "Tunisia will face off against Morocco and Algeria in the upcoming friendly matches set for July.",
    link: "/news/friendly-matches",
  },
  {
    title: "Youth Academy Report",
    date: "May 29, 2025",
    excerpt:
      "A look into the promising talents graduating from Tunisia’s youth academy this year.",
    link: "/news/youth-academy",
  },
  {
    title: "New Stadium Renovation Plans",
    date: "May 25, 2025",
    excerpt:
      "The national stadium is set to undergo renovations to increase capacity and fan experience.",
    link: "/news/stadium-renovation",
  },
];

const sidebarFacts = [
  "Tunisia was the first African team to win a World Cup match in 1978.",
  "The national team is nicknamed 'The Eagles of Carthage'.",
  "Tunisia has won the African Cup of Nations once, in 2004.",
];

export default function HomeContent() {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: { xs: 2, sm: 4 },
        mb: 6,
      }}
    >
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

      {/* Main Layout Grid */}
      <Grid container spacing={4}>
        {/* Main Column */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom fontWeight="bold" mb={3}>
            Featured Stories
          </Typography>

          <Grid container spacing={3}>
            {featuredArticles.map((article) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={article.title}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow:
                      "0 4px 10px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 10px 20px rgba(0,0,0,0.15), 0 4px 8px rgba(0,0,0,0.1)",
                    },
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "100%", sm: 160 },
                      height: 140,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                    image={article.image}
                    alt={article.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {article.date}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {article.excerpt}
                    </Typography>
                    <Button
                      variant="outlined"
                      href={article.link}
                      size="small"
                      sx={{ mt: 2 }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 5 }} />

          {/* News Feed */}
          <Typography variant="h5" gutterBottom fontWeight="bold" mb={3}>
            Latest News
          </Typography>
          <Grid container spacing={2}>
            {newsFeed.map((item) => (
              <Grid item xs={12} key={item.title}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    cursor: "pointer",
                    backgroundColor: "background.paper",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      backgroundColor: "grey.100",
                      transform: "scale(1.02)",
                      boxShadow:
                        "0 8px 20px rgba(0,0,0,0.12), 0 4px 6px rgba(0,0,0,0.08)",
                    },
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => (window.location.href = item.link)}
                >
                  <Typography variant="subtitle1" fontWeight="medium">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.date}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {item.excerpt}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              p: 3,
              position: { md: "sticky" },
              top: { md: 96 },
              borderRadius: 3,
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06)",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Facts
            </Typography>
            {sidebarFacts.map((fact, i) => (
              <Typography
                key={i}
                variant="body2"
                color="text.secondary"
                sx={{ mb: i === sidebarFacts.length - 1 ? 0 : 2 }}
              >
                • {fact}
              </Typography>
            ))}
            <Divider sx={{ my: 3 }} />
            <Button
              variant="contained"
              color="primary"
              href="/team"
              fullWidth
              sx={{ fontWeight: "bold" }}
            >
              Meet the Team
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
