const jsonDbContext = require('./json-context.js');

exports.findAllProducts = () => {
  return jsonDbContext.products.findAll();
};

exports.findProductById = (id) => {
  return jsonDbContext.products.findById(id);
};

exports.createProduct = (product) => {
  return jsonDbContext.products.create(product);
};

exports.updateProduct = (id, product) => {
  return jsonDbContext.products.update(id, product);
};

exports.deleteProduct = (id) => {
  return jsonDbContext.products.delete(id);
};

exports.findAllProductsByCategory = (category) => {
  let products = jsonDbContext.products.findAll();
  let productsByCategory = products.filter((product) => {
    return product.category == category;
  });
  return productsByCategory;
};
