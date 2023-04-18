import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import Users from '../models/Users';
import jwt from 'jsonwebtoken';

passport.use(
  'google',
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.NEXT_PUBLIC_URL + '/api/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const userExist = await Users.findOne({ googleId: profile.id });

        if (userExist) {
          const token = jwt.sign(
            {
              id: userExist._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET,
          );
          userExist.tokens = token;
          await userExist.save();
          done(null, userExist, { message: 'Auth successful', token });
        } else {
          var generateId = (Math.floor(Math.random() * 10000) + 10000)
            .toString()
            .substring(1);
          const newUser = new Users({
            googleId: profile.id,
            email: profile.emails[0].value,
            defaultUserName:
              profile.displayName.replaceAll(' ', '-').toLowerCase() +
              generateId,
            emailVerified: profile.emails[0].verified,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            accessToken,
          });
          await newUser.save();
          const token = jwt.sign(
            {
              id: newUser._id,
              created: Date.now().toString(),
            },
            process.env.JWT_SECRET,
          );
          newUser.tokens = token;
          await newUser.save();
          done(null, newUser, { message: 'Auth successful', token });
        }
      } catch (err) {
        console.error(err);
        done(err, false, { message: 'Internal server error' });
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => done(err, user));
});
