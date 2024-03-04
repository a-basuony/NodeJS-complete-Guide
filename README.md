# Node.js Express App with EJS

This is a simple Node.js application built using the Express framework and EJS templating engine. It includes routing, middleware, and static file serving functionality.

## Prerequisites

Make sure you have the following installed:

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Start the server by running `npm start`.

## Features

- Routing: The app includes several routes for the admin and shop pages.
- Middleware: The app uses middleware functions such as body-parser and express.static to handle request bodies and serve static files.
- Static File Serving: The app provides static files such as images, CSS files, and JavaScript files from the "public" directory.

## Directories

- `routes`: Contains the route files for the admin and shop pages.
- `util`: Contains the helper function for navigation.
- `public`: Contains the static files for the app.
- `views`: Contains the EJS templates for the app.
- `package.json`: Lists the dependencies and scripts for the app.

## Scripts

- `start`: Starts the server.
- `test`: Runs tests (if any).

## Dependencies

- `body-parser`: Middleware for handling request bodies.
- `express`: Web framework for Node.js.
- `ejs`: Templating engine for generating HTML dynamically.
- `path`: Module for handling file paths.

## License

This is licensed under the MIT License.

## Contact

For any questions or concerns, please contact [Your Name].

## Additional Notes

Feel free to modify and extend this app as needed. Make sure to update the README file accordingly.

## Templating Engine

This app uses the [EJS](https://ejs.co/) templating engine to generate HTML dynamically. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

### Why EJS?

EJS offers several advantages over traditional HTML:

- **Simple Syntax**: EJS uses simple tags to embed JavaScript logic in your templates.
- **Familiarity**: If you know JavaScript, you can use EJS without having to learn a new syntax.
- **Performance**: EJS templates are compiled into JavaScript functions, which can be cached for better performance.

### Using EJS in this App

In this app, EJS is used to generate the HTML for the views in the `views` directory. Each view is an EJS template that defines the layout and content of the page.

Here's an example of a simple EJS template:

```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= message %></h1>
    <p>This is my page.</p>
  </body>
</html>
```
