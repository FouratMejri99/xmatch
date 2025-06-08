"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Topbar from "./components/Topbar";

export default function Home() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Home");

  // Handle tab change
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
          marginTop: "6rem", // Enough space below fixed navbar
          flex: "1",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card sx={{ maxWidth: 600, width: "100%" }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              {activeTab}
            </Typography>

            {/* Display content based on active tab */}
            {activeTab === "Home" && (
              <Typography variant="body1">
                Welcome to the Home Tab! Here is some content related to the
                home section.
              </Typography>
            )}
            {activeTab === "My Team" && (
              <Typography variant="body1">
                This is the My Team tab. Here you can view and manage your team.
              </Typography>
            )}
            {activeTab === "Transfers" && (
              <Typography variant="body1">
                Here you can check the latest transfers and updates related to
                players.
              </Typography>
            )}
            {activeTab === "Stats" && (
              <Typography variant="body1">
                View your teams statistics and performance here.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>

      <Footer />
    </div>
  );
}
