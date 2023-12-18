import { Strategy } from "passport-google-oauth20";

import config from "../../config/index.js";
import User from "../../models/User.js";

const GoogleStrategy = new Strategy(
  {
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL,
    scope: ["profile", "email"],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        user = new User({
          googleId: profile.id,
          displayName: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
        });

        await user.save();
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
);

export default GoogleStrategy;
