import React from "react";
import { Route } from "react-dom";

import Chat from "./containers/Chat";

const BaseRouter = () => (
  <div>
    <Route exact path="/:chatID/" component={Chat} />
  </div>
);

export default BaseRouter;
