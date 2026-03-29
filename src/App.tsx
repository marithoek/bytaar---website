import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/ProductDetail";
import CustomWork from "./pages/CustomWork";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow pt-40 md:pt-48 pb-20 px-4 md:px-10 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/over-mij" element={<About />} />
            <Route path="/tassen" element={<Collection />} />
            <Route path="/tassen/:id" element={<ProductDetail />} />
            <Route path="/maatwerk" element={<CustomWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
