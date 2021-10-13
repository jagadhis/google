import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";

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
        </div>
      </div>
      <div className="home_body"></div>
    </div>
  );
}

export default Home;
