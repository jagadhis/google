import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";

function Search() {
  const [input, setinput] = useState("");
  const search = (e) => {
    e.preventdefault();
  };
  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputicon" />
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </div>
  );
}

export default Search;
