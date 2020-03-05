import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// const reduxDevTools = composeWithDevTools();

// const middleWares = [sagaMiddleWear, reduxDevTools, thunk];

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware, thunk)
));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);

export default { store, persistor };


