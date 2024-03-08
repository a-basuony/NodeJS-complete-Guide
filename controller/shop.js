const Cart = require("../model/cart");
const Product = require("../model/product");

// const products = []

const getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

const getProduct = (req, res) => {
  const { productId } = req.params;
  Product.findById(productId, (product) => {
    // console.log(product);
    res.render("shop/product-details", {
      product,
      pageTitle: `${product.title} - Product`,
      path: "/products",
    });
  });
};

const getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

const getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};
const postCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

const getOrders = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};
const getCheckout = (req, res, next) => {
  res.render("shop/orders", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};

module.exports = {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  postCart,
  getOrders,
  getCheckout,
};
