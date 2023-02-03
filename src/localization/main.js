const locize = {
  userName: "User Name",
  notFound: "Not found",
};

locize.get = function (key) {
  return this[key];
};

export default locize;
