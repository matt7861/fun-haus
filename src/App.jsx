import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LargeImage from "./components/LargeImage/LargeImage";
import TextBlocks from "./components/TextBlocks/TextBlocks";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LargeImage />
      <TextBlocks />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App;
