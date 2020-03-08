import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { Link } from 'react-router-dom';
import { CollectionPreviewContainer, Preview, Title } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer >
    <Title><Link to={`/shop/${routeName}`}>{title.toUpperCase()}</Link></Title>
    
      
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
