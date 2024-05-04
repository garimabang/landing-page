import React from "react";
import { Navbar } from "./components";
import { Hero } from "./components";
import { Contact } from "./components";
import { Bestsellers } from "./components";
import { About } from "./components";
import { Testinomials } from "./components";
import { Footer } from "./components";

import "./App.css";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bestsellers />
      <About />
      <Contact />
      <Testinomials />
      <Footer />
    </div>
  );
};

export default App;
