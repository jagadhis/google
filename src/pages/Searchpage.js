import React from "react";
import "./Searchpage.css";
import { useStateValue } from "./Stateprovider";
import Usegooglesearch from "./Usegooglesearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Searchpage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = Usegooglesearch(term);
  //   const data = Response;
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
          <div className="searchpage_options">
            <div className="searchpage_optionsleft">
              <div className="searchpage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchpage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchpage_optionsright">
              <div className="searchpage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchpage_results">
          <p className="searchpage_resultcount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchpage_result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchpage_resultimage"
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      alt=""
                    />
                  )}
                {item.displayLink} :
              </a>
              <a className="searchpage_resulttitle" href={item.link}>
                <h3>{item.title}</h3>
              </a>
              <p className="searchpage_resultsnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchpage;
