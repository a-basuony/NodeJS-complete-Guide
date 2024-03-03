const express = require("express");
const path = require("path");
const router = express.Router();

// to get the root directory name instead of {__dirname, "../"}
const rootDir = require("../util/path");
// import adminRoutes to access products
const adminRoutes = require("./admin");

router.get("/", (req, res) => {
  // console.log("shop", adminRoutes.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = adminRoutes.products;
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" }); // without shop.pug
});

module.exports = router;
