module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    res.render("login/index", { error, layout: "login/layout" });
  },
};