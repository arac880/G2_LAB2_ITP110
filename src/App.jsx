import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MissionVision from "./components/MissionVision";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
