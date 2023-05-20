const path = require("path");

exports.project_root = process.cwd();

// ==================================================================
//-> Directory

exports.modules_dir = path.join(this.project_root, "src", "modules");
exports.migrations_dir = path.join(
  this.project_root,
  "src",
  "models",
  "migrations"
);
exports.seeds_dir = path.join(this.project_root, "src", "models", "seeds");
