"use client";

import { Box, Card, CardContent, Fade } from "@mui/material";
import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Topbar from "./components/Topbar";
import HomeContent from "./pages/Home"; // Import HomeContent
import MyTeam from "./pages/MyTeam"; // Import the component
import Stats from "./pages/stats";
import Transfers from "./pages/transfers";

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

                {activeTab === "Transfers" && <Transfers />}
                {activeTab === "Stats" && <Stats />}
              </Box>
            </Fade>
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </div>
  );
}
