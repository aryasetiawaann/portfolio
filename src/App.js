import React from "react";
import { Navbar, Contact } from "./components";
import { About, Footer, Hero, Projects, Skills } from "./containers";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
