import { __NAME__ } from "./__PATH__";

import { Module } from "types";

export default {
  name: "__NAME__",
  routeProps: {
    path: "/__PATH__",
    exact: true,
    component: __NAME__,
    private: false,
  },
} as Module.Module;
