const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const User = require("./models/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("6381f3b3659c6cbe55154a0d")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect(process.env.MONGO_DB).then((result) => {
  User.findOne().then((user) => {
    if (!user) {
      const user = new User({
        name: "Paige",
        email: "paige@test.com",
        cart: {
          items: [],
        },
      });
      user.save();
    }
  });
  app.listen(process.env.PORT, () =>
    console.log(`Listening at ${process.env.PORT}`)
  );
});
