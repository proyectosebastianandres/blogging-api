/**
 * Enrutar todos los endpoint(index.js) | API
 */

// Import Endpoints
const articulo = require('./api/articulo');
const usuario = require('./api/usuario');

module.exports = (app) => {
  // Insert routes below
  app.use('/api/articulos', articulo);
  app.use('/api/usuarios', usuario);

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
};
