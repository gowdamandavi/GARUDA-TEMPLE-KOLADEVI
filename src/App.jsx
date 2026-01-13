import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import UniqueDeity from "./pages/UniqueDeity";
import Legend from "./pages/Legend";
import Gallery from "./pages/Gallery";
import Sevas from "./pages/Sevas";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/unique-deity" element={<UniqueDeity />} />
            <Route path="/legend" element={<Legend />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sevas" element={<Sevas />} />
            <Route path="/contact" element={<Contact />} />
            {/* fallback to home for unknown routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
