import React, { useState } from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [input, setinput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    console.log("you hit the button");
    history.push("./search");
  };
  return (
    <div className="search">
      <div className="search_input">
        <SearchIcon className="search_inputicon" />
        <input value={input} onChange={(e) => setinput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonshidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonshidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
      ;
    </div>
  );
}

export default Search;
