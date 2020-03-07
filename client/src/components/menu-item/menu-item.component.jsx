import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => {
  return (
    <div
    className={`${size} menu-item animated zoomIn slow`}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
    
    >
     <div
     className="background-image"
     style={{
      backgroundImage: `url(${imageUrl})`
    }}
     >
     </div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
