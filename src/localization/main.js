const locize = {
  userName: "User Name",
  notFound: "Not found",
  country: "Country",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
