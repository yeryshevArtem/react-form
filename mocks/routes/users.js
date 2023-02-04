// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const USERS = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const ALL_USERS = [
  ...USERS,
  {
    id: 3,
    name: "Tommy",
  },
  {
    id: 4,
    name: "Timmy",
  },
];

module.exports = [
  {
    id: "get-users", // id of the route
    url: "/api/users", // url in path-to-regexp format
    method: "GET", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json", // variant type
        options: {
          status: 200,
          body: ALL_USERS,
        },
      },
    ],
  },
  {
    id: "create-user", // id of the route
    url: "/api/users", // url in path-to-regexp format
    method: "POST", // HTTP method
    variants: [
      {
        id: "success", // id of the variant
        type: "json", // variant type
        options: {
          status: 200,
          body: ALL_USERS[0],
        },
      },
    ],
  },
];
