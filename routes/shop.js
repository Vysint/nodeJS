const expresss = require("express");

const path = require('path');

const router = expresss.Router();


router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
});



module.exports = router;
