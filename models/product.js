const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    const path1 = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(path1, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(path1, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    const path1 = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(path1, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
};
