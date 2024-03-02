const path = require("path");

const express = require("express");

// to get the root directory name instead of {__dirname, "../"} = rootDir
const rootDir = require("../util/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
