import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-custom-background-primary">
      <Navbar />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
