import React from "react";
import { Header } from "./components/Header";
import Showcase from "./components/Showcase";
import Location from "./components/location";
import Offer from "./components/Offer";
import Popular from "./components/popular";
import Blog from "./components/blog";
import Images from "./components/Images";
import { Footer } from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Location />
      <Offer />
      <Popular />
      <Blog />
      <Images />
      <Footer />
    </div>
  );
};

export default App;
