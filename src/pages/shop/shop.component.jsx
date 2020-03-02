import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from 'react-redux';
import { updateCollection } from "../../reducers/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionWithSpinner = WithSpinner(Collection)

class Shop extends React.Component {

  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const {updateCollection} = this.props
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(snapshot => {
      const collectionMapped = convertCollectionSnapshotToMap(snapshot)

      console.log(collectionMapped);
      updateCollection(collectionMapped);
      this.setState({loading: false})
    });
  }
  render() {
    const { loading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={match.path} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />}  />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCollection: collections => dispatch(updateCollection(collections))
  }
}

export default connect(null, mapDispatchToProps)(Shop);
