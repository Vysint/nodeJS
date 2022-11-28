const user = require("../models/user");

exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  user.findById("63847abf65ff167b6f4051ac").then((user) => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    res.redirected("/");
  });
  res.redirect("/");
};
