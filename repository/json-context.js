const fs = require('fs');
const productsPath = './data/products.json';

const products = {
  findAll: () => findAll(productsPath),
  findById: (id) => findById(productsPath, id),
  create: (data) => create(productsPath, data),
  update: (id, data) => update(productsPath, id, data),
  delete: (id) => deleteRecord(productsPath, id),
};

const readFileSync = (dataPath) => {
  let jsonData = fs.readFileSync(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
  });
  return JSON.parse(jsonData);
};

const writeFileSync = (dataPath, data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8', (err) => {
    if (err) {
      throw err;
    }
  });
};

function findAll(dataPath) {
  return readFileSync(dataPath);
}

function findById(dataPath, id) {
  return readFileSync(dataPath)[id - 1];
}

function create(dataPath, data) {
  let jsonData = readFileSync(dataPath);
  const newObjectId = Object.keys(jsonData).length + 1;
  newRecord = {
    id: newObjectId,
    name: data.name,
    description: data.description,
    category: data.category,
    price: data.price,
  };
  jsonData[newObjectId - 1] = newRecord;
  writeFileSync(dataPath, jsonData);
  return newRecord;
}

function update(dataPath, id, data) {
  let jsonData = readFileSync(dataPath);
  data = Object.assign({ id: id }, data);
  jsonData[data.id - 1] = data;
  writeFileSync(dataPath, jsonData);
  return data;
}

function deleteRecord(dataPath, id) {
  let jsonData = readFileSync(dataPath);
  let data = jsonData.filter((obj) => {
    return obj.id != id;
  });
  for (let i = 0; i < data.length; i++) {
    data[i].id = i + 1;
  }
  writeFileSync(dataPath, data);
  return data;
}

module.exports = { products: products };
