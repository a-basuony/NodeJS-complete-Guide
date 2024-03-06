const express = require("express");
const path = require("path");
const router = express.Router();

// to get the root directory name instead of {__dirname, "../"}
const rootDir = require("../util/path");
const { getProducts, getIndex } = require("../controller/shop");

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/cart");
router.get("/checkout");

module.exports = router;
