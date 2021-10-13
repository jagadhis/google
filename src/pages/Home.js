import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerleft">
          <Link to="/about">About</Link>
          <Link to="/Store">Store</Link>
        </div>
        <div className="home_headerright">
          <Link to="/Gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/552px-Google_2015_logo.svg.png"
          alt=""
        />
        <div className="home_inputcontainer">
          <Search />
        </div>
        {/* <div className="home_footer">
          <p>India</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
