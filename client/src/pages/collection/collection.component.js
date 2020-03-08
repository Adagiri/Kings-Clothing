import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../reducers/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { CollectionPage, Title, Items} from "./collection.styles";

const Collection = ({ collections }) => {
  const { title, items } = collections;
  return (
    <CollectionPage >
      <Title >{title}</Title>
      <Items >
        {items.map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
      </Items>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collections: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(Collection);
