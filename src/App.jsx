// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import MainAndy from "./components/MainAndy.jsx";
import Header from "./components/HeaderFolder/Header.jsx";
import Navbar from "./components/NavbarFolder/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar />

      <MainAndy />
    </>
  );
}

export default App;
