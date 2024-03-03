const path = require("path");

const express = require("express");

// to get the root directory name instead of {__dirname, "../"} = rootDir
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  // console.log(req.body);
  res.redirect("/");
});

// module.exports = router;

// sharing data
exports.routes = router;
exports.products = products;
