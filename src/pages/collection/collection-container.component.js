import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Collection from "./collection.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsFetching } from "../../reducers/shop/shop.selector";
import { connect } from "react-redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionIsFetching
});

export const CollectionContainer = connect(mapStateToProps)(WithSpinner(Collection));