import { connect } from 'react-redux';
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { selectCollectionIsFetching } from '../../reducers/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
});

 const CollectionsOverviewContainer = compose(
     connect(mapStateToProps),
     WithSpinner
 )(CollectionsOverview)

 export default CollectionsOverviewContainer