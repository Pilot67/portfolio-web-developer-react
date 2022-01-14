import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Contact from "./Components/ContactForm";
import Resume from "./Components/Resume";

import "./style.css";


function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Card />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      <Footer />
    </div>
  );
}
export default App;
