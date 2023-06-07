/* eslint-disable import/newline-after-import */
const express = require("express");
const router = express.Router();
const app = express.Router();
const v1 = express.Router();

const { Database } = require("../apps/knex");
const { tables } = require("../config");

const token_validation = require("../middlewares/token_validation");
const only_admin = require("../middlewares/only_admin");
const only_user = require("../middlewares/only_user");

// =======================================================================
// =======================================================================
// =======================================================================

app.get("/", async (req, res) => {
  /**
    #swagger.tags = ['Index']
    #swagger.summary = '(*)'
  */

  try {
    return res.json({});
  } catch (error) {
    console.log({ error });
    return res.status(500).json({
      message: "Internal Server Error!",
    });
  }
});

router.use("/api/content", app);
router.use("/api/content/v1", v1);
module.exports = router;
