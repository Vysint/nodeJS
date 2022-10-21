const expresss = require("express");

const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = expresss.Router();


router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {prods: products});
});



module.exports = router;
