"use client";

import { Box, Card, CardContent, Fade, Typography } from "@mui/material";
import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Topbar from "./components/Topbar";
import HomeContent from "./pages/Home"; // Import HomeContent
import MyTeam from "./pages/MyTeam"; // Import the component

export default function App() {
  const [activeTab, setActiveTab] = useState("Home"); // Default Home

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Topbar />
      <Navbar onTabChange={handleTabChange} />

      {/* Main Content */}
      <Box
        sx={{
          padding: "2rem",
          marginTop: "6rem",
          flex: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "80%", maxWidth: "100%" }}>
          <CardContent>
            <Fade in={true} timeout={500} key={activeTab}>
              <Box>
                {activeTab === "Home" && <HomeContent />}

                {activeTab === "My Team" && <MyTeam />}

                {activeTab === "Transfers" && (
                  <Typography variant="body1">
                    Here you can check the latest transfers and updates related
                    to players.
                  </Typography>
                )}
                {activeTab === "Stats" && (
                  <Typography variant="body1">
                    View your teams statistics and performance here.
                  </Typography>
                )}
              </Box>
            </Fade>
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </div>
  );
}
