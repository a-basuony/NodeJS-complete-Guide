const express = require("express");
const path = require("path");
const router = express.Router();

// to get the root directory name instead of {__dirname, "../"}
const rootDir = require("../util/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
