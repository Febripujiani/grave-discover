/* eslint-disable import/newline-after-import */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable arrow-body-style */
/* eslint-disable spaced-comment */
const fs = require("fs");
const path = require("path");

const express = require("express");
const http = require("http");

const {
  project_root,
  modules_dir,
  dist_dir,
  index_html_file,
} = require("../paths");
const modules = fs.readdirSync(modules_dir);

const app = express();
const server = http.createServer(app);

//-> middlewares
// for security
app.disable("x-powered-by");
app.use(require("helmet")());
app.use(require("cors")());

app.use("/", express.static(dist_dir));
app.get("/", (_, res) => {
  return res.sendFile(index_html_file);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("morgan")("dev"));

//-> Automatic Listing Modules
for (let i = 0; i < modules.length; i++) {
  const module = modules[i];
  console.log(`✅ Module ${module} Loaded!`);
  app.use(require(path.join(modules_dir, module)));
}

// const routes = {
//   "/": Home,
//   "/home": "Home",
//   "/login": "Login",
//   "/register": "Register",
//   "/profile": "Profile",
//   "/care-orders-page": "CareOrdersPage",
//   "/dashboard-admin-page": "DashboardAdminPage",
//   "/grave-data-page": "GraveDataPage",
//   "/dashboard-user-page": "DashboardUserPage",
//   "/grave-care-page": "GraveCarePage",
//   "/search-grave-page": "SearchGravePage",
// };

// Object.entries(routes).forEach(([route, page]) => {
//   app.get(route, (_, res) => {
//     const filePath = path.join(
//       project_root,
//       dist_dir,
//       `${page.toLowerCase()}.html`
//     );
//     return res.sendFile(filePath);
//   });
// });

// 404 : Page Not Found !!!
app.all("*", (req, res) => {
  if (
    !["get", "post", "put", "patch", "delete"].includes(
      String(req.method).toLowerCase()
    )
  ) {
    return res.status(403).send("forbidden");
  }
  return res.status(404).json({
    message: "endpoint not found!",
  });
});

module.exports = {
  app,
  server,
};
