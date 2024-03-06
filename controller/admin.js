const Product = require("../model/product");

const getAddProducts = (req, res) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCss: true,
    productCss: true,
    // layout: false,// if you don't need to use main-layout
  });
};

const postAddProducts = (req, res) => {
  // products.push({ title: req.body.title });
  const products = new Product(req.body.title);
  products.save();
  // console.log(req.body);
  res.redirect("/");
};

module.exports = {
  getAddProducts,
  postAddProducts,
};
