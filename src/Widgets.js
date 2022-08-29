import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon></FiberManualRecordIcon>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon></InfoIcon>
      </div>
      {newsArticle("Breaking news!","Top news...")}
      {newsArticle("Time for a change!","Steps to improve...")}
      {newsArticle("Prices are rising!","What to do...")}
    </div>
  );
}

export default Widgets;
