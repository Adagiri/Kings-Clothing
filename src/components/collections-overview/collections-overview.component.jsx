import React from 'react';
import "./collections-overview..styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {  shopCollectionsPreview } from "../../reducers/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
    return (
<div className="collections-overview">
{collections.map(({ id, ...otherCollection }) => (
    <CollectionPreview key={id} {...otherCollection} />
  ))}
</div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: shopCollectionsPreview
    })
    
    export default connect(mapStateToProps)(CollectionsOverview);