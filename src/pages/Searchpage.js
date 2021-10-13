import React from "react";
import "./Searchpage.css";
import { useStateValue } from "./Stateprovider";
import usegooglesearch from "./Usegooglesearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";

function Searchpage() {
  const [{ term }, dispatch] = useStateValue();
  //   const { data } = usegooglesearch(term);
  const data = Response;
  console.log(data);
  return (
    <div className="searchpage">
      <div className="searchpage_header">
        <Link to="/">
          <img
            className="searchpage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchpage_headerbody">
          <Search hideButtons />
          <div className="searchpage_options"></div>
        </div>
      </div>
      <div className="searchpage_results"></div>
    </div>
  );
}

export default Searchpage;
