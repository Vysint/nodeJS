const expresss = require("express");

const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = expresss.Router();


router.get("/", (req, res, next) => {
  res.render('shop');
});



module.exports = router;
