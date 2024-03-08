const ErrorController = (req, res) => {
  // res.status(404).sendFile(path.join(rootDir, "./views/404.html")); //.send("<h1>Page Not Found</h1>");
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    pageNotFound: true,
    path: "/404",
  });
};

module.exports = ErrorController;
