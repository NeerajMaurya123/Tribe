import { sleep } from "./utils";

const makeUser = profile => ({
  id: 1,
  ...profile
});

export const fetchUser = async () => {
  await sleep(1000);
  return makeUser(getProfile());
};

export const signIn = async () => {
  await sleep(1000);
  return makeUser(getProfile());
};

export const setProfile = async (firstName, lastName) => {
  await sleep(1000);
  saveProfile(firstName, lastName);
  return makeUser({ firstName, lastName });
};

const saveProfile = (firstName, lastName) =>
  localStorage.setItem("profile", JSON.stringify({ firstName, lastName }));

const getProfile = () => {
  const rawProfile = localStorage.getItem("profile");

  return rawProfile && JSON.parse(rawProfile);
};
