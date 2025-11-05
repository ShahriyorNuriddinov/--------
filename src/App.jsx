import React from "react";
import { Header } from "./components/Header";
import Showcase from "./components/Showcase";
import Offer from "./components/Offer";
import Popular from "./components/popular";
import blog from "./components/blog";
import Images from "./components/Images";
import footer from "./components/footer";
import Location from "./components/location";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Location />
      <Offer />
      <Popular />
      <blog />
      <Images />
      <footer />
    </div>
  );
};

export default App;
