import React from "react";
import ReactDOMClient from "react-dom/client";

import singleSpaReact from "single-spa-react";
import rootComponent from "./App";

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err) {
    console.error(err);
    return <></>;
  },
});
