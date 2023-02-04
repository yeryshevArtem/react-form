const locize = {
  userName: "User Name",
  notFound: "Not found",
  country: "Country",
  submit: "Sumbit",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
