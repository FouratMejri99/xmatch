// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet /> {/* This renders the child route component */}
    </>
  );
}
