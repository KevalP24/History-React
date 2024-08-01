import React from "react";
import Accordion from "./components/Accordion";
import { Container } from "@mui/material";
import "./index.css";

const App = () => {
  return (
    <Container style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div id="appComponent">
        <Accordion />
      </div>
    </Container>
  );
};

export default App;
