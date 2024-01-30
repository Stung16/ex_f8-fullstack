const GoogleStrategy = require("passport-google-oauth2").Strategy;
const { Provider, User } = require("../models/index");
module.exports = new GoogleStrategy(
  {
    // clientID:
    //   "34680024589-rmlianssliv64ier99606tjf7rj0asa9.apps.googleusercontent.com",
    // clientSecret: "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",
    // callbackURL: "https://day61-rust.vercel.app/auth/google/callback",
    // passReqToCallback: true,
    // scope: ["profile", "email"],
    clientID:
      "34680024589-jlm5ndi2koqf1q7co5l2p3nng95itefc.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "https://day61-rust.vercel.app/auth/google/callback",
    passReqToCallback: true,
    scope: ["profile", "email"],
  },
  async function (request, accessToken, refreshToken, profile, done) {
    const {
      displayName: name,
      emails: [{ value: email }],
    } = profile;
    const [provider] = await Provider.findOrCreate({
      where: { name: "google" },
      defaults: { name: "google" },
    });
    const [user] = await User.findOrCreate({
      where: { email, provider_id: provider.id },
      defaults: {
        fullname: name,
        email,
        provider_id: provider.id,
        status: true,
      },
    });
    return done(null, user);
  }
);
