/**
 * Show hello world
 */
function index(req, res) {
  return res.status(200).json({ message: 'articulo del blog' });
}

module.exports = { index };
