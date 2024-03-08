// const products = [];

const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data", // folder name
  "products.json" // file name
);

// Helper function to read products from the file.
const getProductsFromFile = (callback) => {
  // Read the file asynchronously.
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      // If there's an error, pass an empty array to the callback.
      callback([]);
    } else {
      // Parse the file content (assumed to be JSON) and pass it to the callback.
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    // t which is the req.body.title which is an object {title: }
    // Initialize a new Product instance with the provided properties.
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  // Method to save the product to the file.
  save() {
    this.id = Math.random().toString();
    // Read existing products from the file.
    getProductsFromFile((products) => {
      // products is an array that stores a list of product objects, and it is used to manage and store product data in a file.
      // products refers to an array of product objects that are read from the file
      // this => {} :Add the current product instance to the array.
      products.push(this);
      // Write the updated array back to the file.
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err); // Log any errors that occur during writing.
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((product) => product.id === id);
      callback(product);
    });
  }
};
