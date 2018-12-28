import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore();

type P = any;

const withRoot = (Component: React.ComponentType<P>) => {
  return (props: P) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default withRoot;
