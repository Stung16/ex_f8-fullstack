require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var logger = require("morgan");
var flash = require("connect-flash");
var expressLayouts = require("express-ejs-layouts");
const { User } = require("./models/index");
const passport = require("passport");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var rolesRouter = require("./routes/roles");
var authRouter = require("./routes/auth");
var shortLinkRouter = require("./routes/short_link");
const passportLocal = require("./passports/passport.local");
const passportGoogle = require("./passports/passport.google");
const authMiddwares = require("./middlewares/auth.middleware");
const guestMiddleware = require("./middlewares/guest.middleware");
var app = express();

app.use(
  session({
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use("local", passportLocal);
passport.use("google", passportGoogle);


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  //Đọc user từ database theo id
  const user = await User.findByPk(id);
  done(null, user);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth",guestMiddleware, authRouter);
app.use(authMiddwares);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/shorten-urls", shortLinkRouter);
app.use("/roles", rolesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
