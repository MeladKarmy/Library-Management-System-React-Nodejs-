import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
