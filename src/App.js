import React from "react";
import Navbar from "./components/Navbar";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Center from "./components/Center";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app__container">
        <AsideLeft />
        <Center />
        <AsideRight />
      </div>
    </div>
  );
}

export default App;
