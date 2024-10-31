import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";

const MainDash = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="MainDash">
      <div className="header">
        <h1>Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
