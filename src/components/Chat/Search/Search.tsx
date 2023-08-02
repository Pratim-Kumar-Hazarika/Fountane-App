import React from "react";
import SearchIcon from "./search-icon.svg";
import "./search.css";
function Search({ handleSearch }: any) {
  return (
    <div className="searchContainer">
      <div>{/* <image src={SearchIcon} /> */}</div>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="searchBox"
        placeholder="Search by keyword"
      />
    </div>
  );
}

export default Search;
