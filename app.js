const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body parser  middleware and make data accessible in req.body
app.use(bodyParser.urlencoded({ extended: true }));
// to use Public folder  as static files directory
// The middleware function in this case is express.static(), which serves static files such as images, CSS files, and JavaScript files.
app.use(express.static(path.join(rootDir, "public"))); // path.join(__dirname, "public")

// working with routes
// filtering paths
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// page not found
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "./views/404.html")); //.send("<h1>Page Not Found</h1>");
});

app.listen(3000);

// ---------------------------------------------------------------

// 1- app.listen(3000) that creates =>
//      const server = http.createServer(app);
//       server.listen(3000);

//  2- next()  allows the request to continue to next middleware
//          if we don't use it ,the req & res will not work properly because they need to go through all the middlewares

// 3- working with routes we should begin with "/pathName" for pathName page  then the "/" for home page

// 4- use body-parser package to body parser and  make data accessible in req.body
//         install it by npm i body-parser --save
//          const bodyParser = require("body-parser")
//         app.use(bodyParser.urlencoded({ extended: true }));

// 5- res.redirect("/"); send back an HTTP response with redirect to another route which is /

//  6- req.body  contains all form inputs from client side

//  7- // page not found
//   app.use((req, res) => {
//     res.status(404).send("<h1>Page Not Found</h1>");
//   });

// 8- filtering paths
//          app.use("/admin", adminRoutes);
//         /admin/add-product        => will execute the function on path
//                 router.post("/add-product", (req, res) => {
//                          console.log(req.body);
//                          res.redirect("/");
//                   });

// 9- sending HTML pages
//              1-  import path module  => const path = require("path");
//              2- in function => we use res.sendFile() to send file & path.join(__dirname, '../path/fileName')  __dirname gives us the directory
//                   Example: res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//              router.get("/", (req, res) => {
//                 res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
//              });
//              3- create views folder  for html files

//  10- helper function for navigation
//      create a util folder and inside it path.js file
//          1-const path = require("path");
//          2-module.exports = path.dirname(process.mainModule.filename);
//  path.dirname: This is a function from Node.js's built-in path module. It returns the directory name of a file path.
//  process.mainModule.filename: This is a property of Node.js's built-in process object. It contains the absolute filename of the main module that is currently running.
//  the main module => app.js
//        to use it in file
// to get the root directory name instead of {__dirname, "../"} = rootDir
//    1-const rootDir = require("../util/path");
//    2-  res.sendFile(path.join(rootDir, "views", "add-product.html"));

// 11- The code sets up a middleware function in the Express app using the app.use() method. The middleware function in this case is express.static(), which serves static files such as images, CSS files, and JavaScript files.
//     - The express.static() function takes one argument, which is the directory path of the static files.
//     - he directory path is specified as path.join(rootDir, "public").
//     - in public you can add css files , js files
//     - in html file      <link rel="stylesheet" href="/css/main.css" />  &&     <script src="/main.js"></script>
//     app.use(express.static(path.join(rootDir, "public"))); //(or) path.join(__dirname, "public")
