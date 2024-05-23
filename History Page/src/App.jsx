import React from "react";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
import "./index.css";

const App = () => {
  return (
    <div id="appComponent">
      <Navbar />
      <div className="accordion" id="accordionApp">
        <Accordion />
      </div>
    </div>
  );
};

export default App;
