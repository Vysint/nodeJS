const expresss = require("express");

const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = expresss.Router();


router.get("/", (req, res, next) => {
  console.log('shop.js', adminData.products);
  res.sendFile(path.join(rootDir,'views', 'shop.html'));
});



module.exports = router;
