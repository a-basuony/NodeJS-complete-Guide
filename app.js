const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// import handlebarse to work on template engine
// const expressHbs = require("express-handlebars");

const app = express();

// -------------------
// using EJS as a template engine
// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory where your EJS files are located
app.set("views", "views");

// -------------------
// to use handlebars template engine
// app.engine(
//   "handlebars",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "handlebars",
//   })
// ); // => (file extension : 404.handlebars, )Set the view engine to Handlebars and the file extension should be the same name of handlebars
// app.set("view engine", "handlebars"); // => => Set the directory where your Pug files are located
// // Example:
// // app.engine("hbs", expressHbs()); // => file extension 404.hbs
// // app.set("view engine", "hbs"); //
// app.set("views", "./views"); // => Set the directory where your Pug files are located

// -------------------
// to use pug template engine
// app.set("view engine", "pug"); => Set the view engine to Pug
// app.set("views", "./views"); => Set the directory where your Pug files are located
// -------------------

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// body parser  middleware and make data accessible in req.body
app.use(bodyParser.urlencoded({ extended: true }));
// to use Public folder  as static files directory
// The middleware function in this case is express.static(), which serves static files such as images, CSS files, and JavaScript files.
app.use(express.static(path.join(rootDir, "public"))); // path.join(__dirname, "public")

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

// page not found
app.use("*", (req, res) => {
  // res.status(404).sendFile(path.join(rootDir, "./views/404.html")); //.send("<h1>Page Not Found</h1>");
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    pageNotFound: true,
    path: req.path,
  });
});

app.listen(3000);

// --------------- 2- Working with Dynamic Content & template engines   ------------------------------------------------
//
// 1- sharing data with => // sharing data
//                        & importing  const adminRoutes = require("./routes/admin");
//                          app.use("/admin", adminRoutes.routes);
//     sharing =>        exports.routes = router;
//            exports.products = products;

// 2- template engine  - ejs , pug , express-handlebars
//     what is template engine =>  template engines are often used to generate HTML pages dynamically, based on data retrieved from a database or other sources. The template engine takes a template file, which contains the HTML structure and placeholders, and combines it with a data model to produce the final HTML output.
//     installation => npm install ejs pug express-handlebars

//3- pug - how to use it ?
//            1- app.js  => // Set the view engine to Pug => app.set('view engine', 'pug');
//                           // Set the directory where your Pug files are located  =>  app.set('views', './views');
//             2- create a file inside  views folder named shop.pug
//              3- call this file from another shop routes using => render('fileName') or include()
//          Example:          router.get("/", (req, res) => {
//                               res.render("shop"); // without shop.pug
//                            });
//               4- how to send  data to our shop.pug page => locals object : render('fileName', {key: value})
//                    Ex:  res.render("shop", { prods: products, docTitle: "Shop" });
//
//                pug => html element with out (ending tag, and <>, . for class, # for id, attribute inside (href='')) text for html element
//                  Ex: a.link(href="/" class=(path ==='/'? 'active': '')) click
//
//               5- how to use that data inside shop.pug =>
//                    - with variables #{key}  Ex:  title #{docTitle}
//                    - with loop=>  each {key:value} in []  Ex:  each product in prods
//                    - with if condition  =         EX:  if prods.length > 0
//                      - else                =>     ex:  else
//                    - inline if condition  =         EX:  class=(path === "/admin/add-product" ? 'active': '')
//                              res.render("add-product", {pageTitle: "Add Product", path: "/admin/add-product"});
//
//               6- how to use hooks => adding layout or (reusable content inside all html pug pages)
//                     1-  create a new folder inside views folder called => layouts
//                     2- create a file inside layouts folder named => main-layout.pug
//                     3- add inside this file the code you want to reuse it (reusable content)
//                     4- things you want it dynamically use hook => block nameHook
//                              EX: block styles , block content
//                     5- to use main-layout.pug (reusable content)
//                              1- extends layouts/main-layout.pug
//                              2- things dynamically hook => block styles, block content
//                                        Ex: block styles
//                                                 link(rel="stylesheet", href="/css/404.css")
//                                        Ex: block content
//                                                 h1 Oops! Page Not Found
//
//
//4- working with Handlebars
//      1-  Installation => npm install --save express-handlebars@3.0
//      2-  how to use it => normal html with custom syntax
//           - variables    {{variableName}}
//           - if    {{#if hasAttribute}} logic       {{else}}          {{/if}}
//           - loop    {{#each array}} logic        {{this.title}}         {{/each}}
//                      array => [{title: book}]
//
//      3- app.js // to use handlebars template engine
//          app.engine("handlebars", expressHbs()); // => (file extension : 404.handlebars)Set the view engine to Handlebars and the file extension should be the same name of handlebars
//          app.set("view engine", "handlebars"); // => => Set the directory where your Pug files are located
//          app.set("views", "./views"); // => Set the directory where your Pug files are located
//        Example:
//          app.engine("hbs", expressHbs()); // => file extension 404.hbs
//          app.set("view engine", "hbs"); //
//
//        4- when working with layouts: add to expressHbs({layoutsDir: "views/layouts", defaultLayout: "main-layout"}) the path and the name of that file
//                      1-  app.engine("handlebars", expressHbs({layoutsDir: "views/layouts", defaultLayout: "main-layout"}));
//                      2- create a file "main-layout.handlebars"
//                      2- in "main-layout.handlebars" file if you need to render some links do =>
//                        dynamic link =>     {{#if productCss}}    <link rel="stylesheet" href="/css/product.css" />   {{/if}}
//                        hooks =>    {{{body}}}
//                        active class =>   class="{{#if activeAddProduct}}active{{/if}}"
//
//        app.engine("handlebars",expressHbs({layoutsDir: "views/layouts",defaultLayout: "main-layout",extname: "handlebars",}));
//         app.set("view engine", "handlebars"); // => => Set the directory where your Pug files are located
// /          app.set("views", "./views"); // => Set the directory where your Pug files are located

//
//
// 5- working with EJS
//           1- app.js  => // using EJS as a template engine
//                      app.set('view engine', 'ejs'); => Set the view engine to EJS
//                      app.set('views', './views'); => Set the directory where your EJS files are located
//
//          1- how to use it
//              - variables      <%= variableName %> => <%= render as a text%>
//              - if             <% if (condition) {%>     logic            <% }else {%>     logic
//              - loop             <% for(let product of prods){ %>     logic            <% } %>     logic
//              - layout  to render html code  <%- include('./path/file')%> => <%- render a html code%>
//                    1- create a folder includes inside views
//                    2- create your files inside includes folder Ex: head.ejs file
//                    3- to reuse it inside all html files where you want use => <%- include('includes/head')%
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// --------------- 1- Working with Express    ------------------------------------------------

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
//      path.dirname: This is a function from Node.js's built-in path module. It returns the directory name of a file path.
//      process.mainModule.filename: This is a property of Node.js's built-in process object. It contains the absolute filename of the main module that is currently running.
//      the main module => app.js
//        to use it in file
// to get the root directory name instead of {__dirname, "../"} = rootDir
//    1-const rootDir = require("../util/path");
//    2-  res.sendFile(path.join(rootDir, "views", "add-product.html"));

// 11- The code sets up a middleware function in the Express app using the app.use() method. The middleware   function in this case is express.static(),
//  which serves static files such as images, CSS files, and JavaScript files.
//     - The express.static() function takes one argument, which is the directory path of the static files.
//     - the directory path is specified as path.join(rootDir, "public").
//     - in public you can add css files , js files
//     - in html file      <link rel="stylesheet" href="/css/main.css" />  &&     <script src="/main.js"></script>
//     app.use(express.static(path.join(rootDir, "public"))); //(or) path.join(__dirname, "public")
