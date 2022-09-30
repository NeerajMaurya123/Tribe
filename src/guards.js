export const profileNotSet = (isAuthenticated, data) =>
  isAuthenticated && (!data.firstName && !data.lastName);

export const unauthenticated = isAuthenticated => !isAuthenticated;

export const profileSet = (isAuthenticated, data) =>
  isAuthenticated && data.firstName && data.lastName;
