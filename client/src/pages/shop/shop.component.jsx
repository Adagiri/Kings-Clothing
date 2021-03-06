import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../reducers/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";
import{ CollectionContainer } from "../collection/collection-container.component"
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const CollectionsOverviewContainer = lazy(() => import("../../components/collections-overview/collections-overview-container.component"));



const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
    <ErrorBoundary>
   <Suspense fallback={<Spinner />} >
   <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
   </Suspense>
   </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
