import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  Store
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer, { RootState, RootActions } from "./reducers";

const composeEnhancers = __DEV__ ? composeWithDevTools({}) : compose;

const configureStore: () => Store<RootState, RootActions> = () => {
  const middlewares: Middleware[] = [];

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};

export default configureStore;
