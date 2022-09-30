import React, { useContext, useEffect } from "react";
import { Redirect } from "@reach/router";
import { userContext } from "../context";
import * as api from "../api";
import Loader from "./Loader";

export default ({ component: Component, guard, ...props }) => {
  const user = useContext(userContext);
  const page = <Component {...props} />;

  /**
   * When no guard provided
   * or user is not authenticated and guard allows - rendering the page
   */
  if (!guard || (!user.isAuthenticated && guard(false))) {
    return page;
  }

  /**
   * When user is not authenticated and guard denies - redirecting a user
   * to the page according to his user data
   */
  if (!user.isAuthenticated && !guard(false)) {
    return <Redirect noThrow to={redirectTo(false)} />;
  }

  /**
   * Otherwise rendering a component for Authenticated users
   */
  return (
    <Authenticated guard={guard} user={user}>
      {page}
    </Authenticated>
  );
};

const Authenticated = ({ children, guard, user }) => {
  const isDataLoaded = !!user.data;

  /**
   * Fetching user personal data at first render
   */
  useEffect(() => {
    if (!isDataLoaded) {
      api.fetchUser().then(user.setData);
    }
  }, [isDataLoaded, user]);

  if (!isDataLoaded) return <Loader />;

  /**
   * Once user is loaded, checking his ability to access the page
   * If denied - redirecting him to the page he has access to
   */
  if (!guard(true, user.data)) {
    return <Redirect noThrow to={redirectTo(true, user.data)} />;
  }

  /**
   * Otherwise user is allowed and we render page content
   */

  return children;
};

export const redirectTo = (isAuthenticated, userData) => {
  if (!isAuthenticated) {
    return "/sign-in";
  }

  if (!userData.firstName && !userData.lastName) {
    return "/profile-setup";
  }

  return "/";
};
