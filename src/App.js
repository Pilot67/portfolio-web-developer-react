import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Card from "./Components/Card";
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
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </div>
  );
}
export default App;
