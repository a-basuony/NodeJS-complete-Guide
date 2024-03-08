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
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const products = new Product(title, imageUrl, description, price); // as you define it inside model
  products.save();
  res.redirect("/");
};

const getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "admin/products",
    });
  });
};

module.exports = {
  getAddProducts,
  postAddProducts,
  getProducts,
};
