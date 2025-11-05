import React from "react";
import Header  from "./components/Header";
import Showcase from "./components/Showcase";
import Content from "./components/Content";
import Service from "./components/Service";
import Adventure from "./components/Adventure";
import Offer from "./components/Offer";
import Images from "./components/Images";
import Foter from "./components/Foter";


const App = () => {
  return (
    <div>
      <Header />
       <Showcase />  
       <Service />
       <Offer />
       <Adventure/>
        <Content />
        <Images />
        <Foter/>
    </div>
  );
};

export default App;
