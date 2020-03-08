import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from 'react-router-dom';
import { Menuitem, Content, Title, Subtitle, BackgroundImage } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, match, history, linkUrl }) => {
  return (
    <Menuitem
    className={`${size} animated zoomIn slow`}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
    
    >
     <BackgroundImage
     className="background-image"
     style={{
      backgroundImage: `url(${imageUrl})`
    }}
     >
     </BackgroundImage>
      <Content className="content">
        <Title >{title.toUpperCase()}</Title>
        <Subtitle >SHOP NOW</Subtitle>
      </Content>
    </Menuitem>
  );
};

export default withRouter(MenuItem);
