const fs = require("fs");
const path = require("path");

const express = require("express");
const http = require("http");

const { modules_dir } = require("../paths");
const modules = fs.readdirSync(modules_dir);

const app = express();
const server = http.createServer(app);

//-> middlewares
// for security
app.disable("x-powered-by");
app.use(require("helmet")());
app.use(require("cors")());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("morgan")("dev"));

//-> Automatic Listing Modules
for (let i = 0; i < modules.length; i++) {
  const module = modules[i];
  console.log(`✅ Module ${module} Loaded!`);
  app.use(require(path.join(modules_dir, module)));
}

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
