// ENUMS

enum Roles {
  admin = "admin",
  user = "user",
}

type user = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const shashikant: user = {
  name: "Shashikant",
  email: "shashiknat@gmail.com",
  password: "4886@4886",
  role: Roles.admin,
};
