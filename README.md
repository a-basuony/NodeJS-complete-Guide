# Node.js Express App

This is a simple Node.js application built using the Express framework. It includes routing, middleware, and static file serving functionality.

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
- `views`: Contains the Handlebars templates for the app.
- `package.json`: Lists the dependencies and scripts for the app.

## Scripts

- `start`: Starts the server.
- `test`: Runs tests (if any).

## Dependencies

- `body-parser`: Middleware for handling request bodies.
- `express`: Web framework for Node.js.
- `handlebars`: Templating engine for generating HTML dynamically.
- `path`: Module for handling file paths.

## License

This is licensed under the MIT License.

## Contact

For any questions or concerns, please contact [Your Name].

## Additional Notes

Feel free to modify and extend this app as needed. Make sure to update the README file accordingly. This app uses Handlebars as the templating engine instead of Pug.

## Templating Engine

This app uses the [Handlebars](https://handlebarsjs.com/) templating engine to generate HTML dynamically. Handlebars is a template engine for Node.js that lets you build semantic templates effectively with no frustration.

### Why Handlebars?

Handlebars offers several advantages over traditional HTML:

- **Logicless**: Handlebars aims to keep the view and logic separate with no embedded JavaScript.
- **Extensible**: Handlebars is designed to be extensible, allowing you to add your own helpers and partials to the system.
- **Compact**: Handlebars has a very concise syntax and keeps your templates clean and easy to read.

### Using Handlebars in this App

In this app, Handlebars is used to generate the HTML for the views in the `views` directory. Each view is a Handlebars template that defines the layout and content of the page.

Here's an example of a simple Handlebars template:

```handlebars
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my page.</p>
  </body>
</html>
```
