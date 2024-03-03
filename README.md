# master-Express

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
- `views`: Contains the Pug templates for the app.
- `package.json`: Lists the dependencies and scripts for the app.

## Scripts

- `start`: Starts the server.
- `test`: Runs tests (if any).

## Dependencies

- `body-parser`: Middleware for handling request bodies.
- `express`: Web framework for Node.js.
- `pug`: Templating engine for generating HTML dynamically.
- `path`: Module for handling file paths.

## License

This is licensed under the MIT License.

## Contact

For any questions or concerns, please contact [Your Name].

## Additional Notes

Feel free to modify and extend this app as needed. Make sure to update the README file accordingly.

## Templating Engine

This app uses the [Pug](https://pugjs.org/api/getting-started.html) templating engine to generate HTML dynamically. Pug is a template engine for Node.js that lets you write dynamic HTML using a syntax that is easier to read and write than traditional HTML.

### Why Pug?

Pug offers several advantages over traditional HTML:

- **Simplicity**: Pug's syntax is simpler and more concise than HTML. It eliminates the need for closing tags and allows you to define reusable components.
- **Performance**: Pug is faster than other templating engines because it compiles to JavaScript functions that can be cached and reused.
- **Extensibility**: Pug is highly customizable and can be extended with plugins and mixins.

### Using Pug in this App

In this app, Pug is used to generate the HTML for the views in the `views` directory. Each view is a Pug template that defines the layout and content of the page.

Here's an example of a simple Pug template:

```pug
doctype html
html
  head
    title My Page
  body
    h1 Hello, world!
    p This is my page.
```
