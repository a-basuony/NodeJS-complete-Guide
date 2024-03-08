const path = require("path");
const express = require("express");
const router = express.Router();

// to get the root directory name instead of {__dirname, "../"} = rootDir
const rootDir = require("../util/path");
const {
  getAddProducts,
  postAddProducts,
  getProducts,
} = require("../controller/admin");

// /admin/add-product => GET
router.get("/add-product", getAddProducts);

// /admin/products => GET
router.get("/products", getProducts);

// /admin/add-product => POST
router.post("/add-product", postAddProducts);

module.exports = router;
