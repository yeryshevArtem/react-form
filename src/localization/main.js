const locize = {
  userName: "Username",
  notFound: "Not found",
  country: "Country",
  submit: "Sumbit",
  createUserProfileErr: "Sorry, but can't create user profile. Try again...",
  createUserProfileSuccess: "Your profile was created with success.",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
