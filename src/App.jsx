// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import MainAndy from "./components/MainAndy.jsx";
import Sidenav from "./components/Sidenav.jsx";
import Header from "./components/HeaderFolder/Header.jsx";
import Gorilla from "./Gorilla.jsx";

function App() {
  return (
    <>
      <Header />
      <Sidenav />

      <MainAndy />
      <Gorilla />
    </>
  );
}

export default App;
