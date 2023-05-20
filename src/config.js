const path = require("path");

const { project_root } = require("./paths");

require("dotenv").config({
  path: path.join(project_root, ".env"),
});
exports.NODE_ENV = process.env.NODE_ENV;
exports.isProduction = String(this.NODE_ENV).includes("production");
exports.isDevelopment = String(this.NODE_ENV).includes("development");
exports.isLocal = ![this.isDevelopment, this.isProduction].includes(true);

exports.PORT = process.env.PORT;
exports.TZ = process.env.TZ ?? "Asia/Jakarta";

// Security
exports.SECRET_KEY = process.env.SECRET_KEY;

// Database
exports.DB_TYPE = process.env.DB_TYPE;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT;
exports.DB_USER = process.env.DB_USER;
exports.DB_PASS = process.env.DB_PASS;
exports.DB_NAME = process.env.DB_NAME;

exports.user_roles = {
  // administrator
  admin: "admin",

  // user
  user: "user", // register
};

exports.tables = {
  users: "users",
};
