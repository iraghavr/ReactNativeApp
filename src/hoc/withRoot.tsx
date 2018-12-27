import React from "react";
import { Provider } from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore();

const withRoot = (Component: React.ComponentType) => {
  return (props: any) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default withRoot;
