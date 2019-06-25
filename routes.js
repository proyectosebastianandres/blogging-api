/**
 * Enrutar todos los endpoint(index.js) | API
 */

// Import Endpoints
const articulo = require('./api/articulo');

module.exports = (app) => {

  // Insert routes below
  app.use('/api/articulos', articulo);

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
};
