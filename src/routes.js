import React from "react";
import { Router } from "@reach/router";
import Page from "./components/Page";
import SignIn from "./pages/sign-in";
import Main from "./pages/main";
import ProfileSetup from "./pages/profile-setup";
import * as guards from "./guards";

export default () => (
  <Router>
    <Page path="/sign-in" guard={guards.unauthenticated} component={SignIn} />
    <Page
      path="/profile-setup"
      guard={guards.profileNotSet}
      component={ProfileSetup}
    />
    <Page path="/" guard={guards.profileSet} component={Main} />
  </Router>
);
