/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/users           ->  index
 * GET     /api/users/:id       ->  userID
 * POST    /api/users           ->  create
 */

const User = require('./usuario.model');

// GET all the users
function index(req, res) {
  return User.find().exec()
  .then(respondWithResult(res))
  .catch(handleError(res))
}

// CREATE a user
function create(req, res) {
  return User.create(req.body)
  .then(respondWithResult(res, 201))
  .catch(handleError(res))
}

// GET a single user
function userID(req, res) {
  return User.findById(req.params.id).exec()
  .then(handleEntityNotFound(res))
  .then(respondWithResult(res))
  .catch(handleError(res))
}


// Manage the respodens of the consult to the dataBase
function respondWithResult(res, code) {
  const statusCode = code || 200;
  return (entity) => {
    if(entity) {
      res.status(statusCode).json(entity)
    }
  }
}

// Handle if a userId don´t exits
function handleEntityNotFound(res) {
  return(entity) => {
    if(!entity) {
      res.status(404).end()
      return null
    }
    return entity
  }
}

// Handle the Errors of the consult to the dataBase
function handleError(res, code) {
  const statusCode = code | 500;
  return (err) => {
      res.status(statusCode).json(err)
  }
}

module.exports = {
  index,
  create,
  userID
}
