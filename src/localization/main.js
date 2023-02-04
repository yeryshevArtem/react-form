const locize = {
  userName: "User Name",
  notFound: "Not found",
  country: "Country",
  submit: "Sumbit",
  createUserProfileErr: "Sorry, but can't create user profile. Try again...",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
