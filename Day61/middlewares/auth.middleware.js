module.exports = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect("/auth/login");
};